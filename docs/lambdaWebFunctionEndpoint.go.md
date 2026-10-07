# `lambdaWebFunctionEndpoint` Submodule <a name="`lambdaWebFunctionEndpoint` Submodule" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaWebFunctionEndpoint <a name="LambdaWebFunctionEndpoint" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint awscc_lambda_web_function_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

lambdawebfunctionendpoint.NewLambdaWebFunctionEndpoint(scope Construct, id *string, config LambdaWebFunctionEndpointConfig) LambdaWebFunctionEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig">LambdaWebFunctionEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig">LambdaWebFunctionEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putRevisionWeights">PutRevisionWeights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putScalingConfig">PutScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putThrottleConfig">PutThrottleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetRevisionWeights">ResetRevisionWeights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetScalingConfig">ResetScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetThrottleConfig">ResetThrottleConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRevisionWeights` <a name="PutRevisionWeights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putRevisionWeights"></a>

```go
func PutRevisionWeights(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putRevisionWeights.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScalingConfig` <a name="PutScalingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putScalingConfig"></a>

```go
func PutScalingConfig(value LambdaWebFunctionEndpointScalingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putScalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig">LambdaWebFunctionEndpointScalingConfig</a>

---

##### `PutThrottleConfig` <a name="PutThrottleConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putThrottleConfig"></a>

```go
func PutThrottleConfig(value LambdaWebFunctionEndpointThrottleConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.putThrottleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig">LambdaWebFunctionEndpointThrottleConfig</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetRegions"></a>

```go
func ResetRegions()
```

##### `ResetRevisionWeights` <a name="ResetRevisionWeights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetRevisionWeights"></a>

```go
func ResetRevisionWeights()
```

##### `ResetScalingConfig` <a name="ResetScalingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetScalingConfig"></a>

```go
func ResetScalingConfig()
```

##### `ResetThrottleConfig` <a name="ResetThrottleConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.resetThrottleConfig"></a>

```go
func ResetThrottleConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaWebFunctionEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

lambdawebfunctionendpoint.LambdaWebFunctionEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

lambdawebfunctionendpoint.LambdaWebFunctionEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

lambdawebfunctionendpoint.LambdaWebFunctionEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

lambdawebfunctionendpoint.LambdaWebFunctionEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LambdaWebFunctionEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LambdaWebFunctionEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LambdaWebFunctionEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LambdaWebFunctionEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointArn">EndpointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.functionArn">FunctionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.regionalEndpoints">RegionalEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap">LambdaWebFunctionEndpointRegionalEndpointsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.revisionWeights">RevisionWeights</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList">LambdaWebFunctionEndpointRevisionWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.scalingConfig">ScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference">LambdaWebFunctionEndpointScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.stateReason">StateReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.throttleConfig">ThrottleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference">LambdaWebFunctionEndpointThrottleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.updateStatus">UpdateStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.updateStatusReason">UpdateStatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.functionNameInput">FunctionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.revisionWeightsInput">RevisionWeightsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.scalingConfigInput">ScalingConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.throttleConfigInput">ThrottleConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointType">EndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.functionName">FunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `EndpointArn`<sup>Required</sup> <a name="EndpointArn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointArn"></a>

```go
func EndpointArn() *string
```

- *Type:* *string

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.functionArn"></a>

```go
func FunctionArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RegionalEndpoints`<sup>Required</sup> <a name="RegionalEndpoints" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.regionalEndpoints"></a>

```go
func RegionalEndpoints() LambdaWebFunctionEndpointRegionalEndpointsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap">LambdaWebFunctionEndpointRegionalEndpointsMap</a>

---

##### `RevisionWeights`<sup>Required</sup> <a name="RevisionWeights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.revisionWeights"></a>

```go
func RevisionWeights() LambdaWebFunctionEndpointRevisionWeightsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList">LambdaWebFunctionEndpointRevisionWeightsList</a>

---

##### `ScalingConfig`<sup>Required</sup> <a name="ScalingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.scalingConfig"></a>

```go
func ScalingConfig() LambdaWebFunctionEndpointScalingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference">LambdaWebFunctionEndpointScalingConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.stateReason"></a>

```go
func StateReason() *string
```

- *Type:* *string

---

##### `ThrottleConfig`<sup>Required</sup> <a name="ThrottleConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.throttleConfig"></a>

```go
func ThrottleConfig() LambdaWebFunctionEndpointThrottleConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference">LambdaWebFunctionEndpointThrottleConfigOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `UpdateStatus`<sup>Required</sup> <a name="UpdateStatus" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.updateStatus"></a>

```go
func UpdateStatus() *string
```

- *Type:* *string

---

##### `UpdateStatusReason`<sup>Required</sup> <a name="UpdateStatusReason" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.updateStatusReason"></a>

```go
func UpdateStatusReason() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointTypeInput"></a>

```go
func EndpointTypeInput() *string
```

- *Type:* *string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.functionNameInput"></a>

```go
func FunctionNameInput() *string
```

- *Type:* *string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RevisionWeightsInput`<sup>Optional</sup> <a name="RevisionWeightsInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.revisionWeightsInput"></a>

```go
func RevisionWeightsInput() interface{}
```

- *Type:* interface{}

---

##### `ScalingConfigInput`<sup>Optional</sup> <a name="ScalingConfigInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.scalingConfigInput"></a>

```go
func ScalingConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ThrottleConfigInput`<sup>Optional</sup> <a name="ThrottleConfigInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.throttleConfigInput"></a>

```go
func ThrottleConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.endpointType"></a>

```go
func EndpointType() *string
```

- *Type:* *string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.functionName"></a>

```go
func FunctionName() *string
```

- *Type:* *string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaWebFunctionEndpointConfig <a name="LambdaWebFunctionEndpointConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

&lambdawebfunctionendpoint.LambdaWebFunctionEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AuthType: *string,
	EndpointName: *string,
	EndpointType: *string,
	FunctionName: *string,
	Description: *string,
	Regions: *[]*string,
	RevisionWeights: interface{},
	ScalingConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig,
	ThrottleConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.authType">AuthType</a></code> | <code>*string</code> | The authentication type for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.endpointName">EndpointName</a></code> | <code>*string</code> | The name of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.endpointType">EndpointType</a></code> | <code>*string</code> | The type of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.functionName">FunctionName</a></code> | <code>*string</code> | The name of the web function this endpoint belongs to. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.description">Description</a></code> | <code>*string</code> | A description of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.regions">Regions</a></code> | <code>*[]*string</code> | The list of AWS Regions for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.revisionWeights">RevisionWeights</a></code> | <code>interface{}</code> | List of revision routing entries. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.scalingConfig">ScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig">LambdaWebFunctionEndpointScalingConfig</a></code> | The scaling configuration for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.throttleConfig">ThrottleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig">LambdaWebFunctionEndpointThrottleConfig</a></code> | The throttling configuration for the endpoint. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

The authentication type for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#auth_type LambdaWebFunctionEndpoint#auth_type}

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

The name of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#endpoint_name LambdaWebFunctionEndpoint#endpoint_name}

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.endpointType"></a>

```go
EndpointType *string
```

- *Type:* *string

The type of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#endpoint_type LambdaWebFunctionEndpoint#endpoint_type}

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.functionName"></a>

```go
FunctionName *string
```

- *Type:* *string

The name of the web function this endpoint belongs to.

The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#function_name LambdaWebFunctionEndpoint#function_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#description LambdaWebFunctionEndpoint#description}

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

The list of AWS Regions for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#regions LambdaWebFunctionEndpoint#regions}

---

##### `RevisionWeights`<sup>Optional</sup> <a name="RevisionWeights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.revisionWeights"></a>

```go
RevisionWeights interface{}
```

- *Type:* interface{}

List of revision routing entries.

1 or 2 entries. With 1 entry, weight must be 100. With 2 entries, weights must sum to 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#revision_weights LambdaWebFunctionEndpoint#revision_weights}

---

##### `ScalingConfig`<sup>Optional</sup> <a name="ScalingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.scalingConfig"></a>

```go
ScalingConfig LambdaWebFunctionEndpointScalingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig">LambdaWebFunctionEndpointScalingConfig</a>

The scaling configuration for the endpoint.

Optionally constrains how many concurrent execution environments the endpoint can use, in addition to your account's vCPU quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#scaling_config LambdaWebFunctionEndpoint#scaling_config}

---

##### `ThrottleConfig`<sup>Optional</sup> <a name="ThrottleConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointConfig.property.throttleConfig"></a>

```go
ThrottleConfig LambdaWebFunctionEndpointThrottleConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig">LambdaWebFunctionEndpointThrottleConfig</a>

The throttling configuration for the endpoint.

Optionally constrains the request rate that the endpoint accepts, in addition to your account's rate limit quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#throttle_config LambdaWebFunctionEndpoint#throttle_config}

---

### LambdaWebFunctionEndpointRegionalEndpoints <a name="LambdaWebFunctionEndpointRegionalEndpoints" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

&lambdawebfunctionendpoint.LambdaWebFunctionEndpointRegionalEndpoints {

}
```


### LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights <a name="LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

&lambdawebfunctionendpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights {

}
```


### LambdaWebFunctionEndpointRegionalEndpointsScalingConfig <a name="LambdaWebFunctionEndpointRegionalEndpointsScalingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

&lambdawebfunctionendpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfig {

}
```


### LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig <a name="LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

&lambdawebfunctionendpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig {

}
```


### LambdaWebFunctionEndpointRevisionWeights <a name="LambdaWebFunctionEndpointRevisionWeights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

&lambdawebfunctionendpoint.LambdaWebFunctionEndpointRevisionWeights {
	RevisionId: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights.property.revisionId">RevisionId</a></code> | <code>*string</code> | The revision identifier. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights.property.weight">Weight</a></code> | <code>*f64</code> | The traffic weight for this revision. |

---

##### `RevisionId`<sup>Optional</sup> <a name="RevisionId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights.property.revisionId"></a>

```go
RevisionId *string
```

- *Type:* *string

The revision identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#revision_id LambdaWebFunctionEndpoint#revision_id}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeights.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

The traffic weight for this revision.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#weight LambdaWebFunctionEndpoint#weight}

---

### LambdaWebFunctionEndpointScalingConfig <a name="LambdaWebFunctionEndpointScalingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

&lambdawebfunctionendpoint.LambdaWebFunctionEndpointScalingConfig {
	MaxEnvironments: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig.property.maxEnvironments">MaxEnvironments</a></code> | <code>*f64</code> | The maximum number of concurrent execution environments for the endpoint. |

---

##### `MaxEnvironments`<sup>Optional</sup> <a name="MaxEnvironments" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfig.property.maxEnvironments"></a>

```go
MaxEnvironments *f64
```

- *Type:* *f64

The maximum number of concurrent execution environments for the endpoint.

This optional limit further constrains the endpoint's scaling. When omitted, the endpoint's scaling is limited only by your account's vCPU quota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#max_environments LambdaWebFunctionEndpoint#max_environments}

---

### LambdaWebFunctionEndpointThrottleConfig <a name="LambdaWebFunctionEndpointThrottleConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

&lambdawebfunctionendpoint.LambdaWebFunctionEndpointThrottleConfig {
	RateLimit: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig.property.rateLimit">RateLimit</a></code> | <code>*f64</code> | The maximum request rate per second for the endpoint, up to a maximum of 10000. |

---

##### `RateLimit`<sup>Optional</sup> <a name="RateLimit" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfig.property.rateLimit"></a>

```go
RateLimit *f64
```

- *Type:* *f64

The maximum request rate per second for the endpoint, up to a maximum of 10000.

This optional limit further constrains the endpoint's request rate. When omitted, the endpoint's request rate is limited only by your account's rate limit quota. Specify 0 to reject all new requests. Other supported values are 100 through 1000 in increments of 100, and 2000 through 10000 in increments of 1000. Supported values can vary by Region; if you specify an unsupported value, the error lists the values available in that Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/lambda_web_function_endpoint#rate_limit LambdaWebFunctionEndpoint#rate_limit}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaWebFunctionEndpointRegionalEndpointsMap <a name="LambdaWebFunctionEndpointRegionalEndpointsMap" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

lambdawebfunctionendpoint.NewLambdaWebFunctionEndpointRegionalEndpointsMap(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaWebFunctionEndpointRegionalEndpointsMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.get"></a>

```go
func Get(key *string) LambdaWebFunctionEndpointRegionalEndpointsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### LambdaWebFunctionEndpointRegionalEndpointsOutputReference <a name="LambdaWebFunctionEndpointRegionalEndpointsOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

lambdawebfunctionendpoint.NewLambdaWebFunctionEndpointRegionalEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) LambdaWebFunctionEndpointRegionalEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.revisionWeights">RevisionWeights</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList">LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.scalingConfig">ScalingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference">LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.stateReason">StateReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.throttleConfig">ThrottleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference">LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.updateStatus">UpdateStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.updateStatusReason">UpdateStatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpoints">LambdaWebFunctionEndpointRegionalEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `RevisionWeights`<sup>Required</sup> <a name="RevisionWeights" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.revisionWeights"></a>

```go
func RevisionWeights() LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList">LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList</a>

---

##### `ScalingConfig`<sup>Required</sup> <a name="ScalingConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.scalingConfig"></a>

```go
func ScalingConfig() LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference">LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.stateReason"></a>

```go
func StateReason() *string
```

- *Type:* *string

---

##### `ThrottleConfig`<sup>Required</sup> <a name="ThrottleConfig" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.throttleConfig"></a>

```go
func ThrottleConfig() LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference">LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference</a>

---

##### `UpdateStatus`<sup>Required</sup> <a name="UpdateStatus" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.updateStatus"></a>

```go
func UpdateStatus() *string
```

- *Type:* *string

---

##### `UpdateStatusReason`<sup>Required</sup> <a name="UpdateStatusReason" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.updateStatusReason"></a>

```go
func UpdateStatusReason() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() LambdaWebFunctionEndpointRegionalEndpoints
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpoints">LambdaWebFunctionEndpointRegionalEndpoints</a>

---


### LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList <a name="LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

lambdawebfunctionendpoint.NewLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.get"></a>

```go
func Get(index *f64) LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference <a name="LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

lambdawebfunctionendpoint.NewLambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.revisionId">RevisionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights">LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RevisionId`<sup>Required</sup> <a name="RevisionId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.revisionId"></a>

```go
func RevisionId() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeightsOutputReference.property.internalValue"></a>

```go
func InternalValue() LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights">LambdaWebFunctionEndpointRegionalEndpointsRevisionWeights</a>

---


### LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference <a name="LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

lambdawebfunctionendpoint.NewLambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.maxEnvironments">MaxEnvironments</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfig">LambdaWebFunctionEndpointRegionalEndpointsScalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxEnvironments`<sup>Required</sup> <a name="MaxEnvironments" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.maxEnvironments"></a>

```go
func MaxEnvironments() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() LambdaWebFunctionEndpointRegionalEndpointsScalingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsScalingConfig">LambdaWebFunctionEndpointRegionalEndpointsScalingConfig</a>

---


### LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference <a name="LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

lambdawebfunctionendpoint.NewLambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.rateLimit">RateLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig">LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.rateLimit"></a>

```go
func RateLimit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig">LambdaWebFunctionEndpointRegionalEndpointsThrottleConfig</a>

---


### LambdaWebFunctionEndpointRevisionWeightsList <a name="LambdaWebFunctionEndpointRevisionWeightsList" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

lambdawebfunctionendpoint.NewLambdaWebFunctionEndpointRevisionWeightsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LambdaWebFunctionEndpointRevisionWeightsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.get"></a>

```go
func Get(index *f64) LambdaWebFunctionEndpointRevisionWeightsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaWebFunctionEndpointRevisionWeightsOutputReference <a name="LambdaWebFunctionEndpointRevisionWeightsOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

lambdawebfunctionendpoint.NewLambdaWebFunctionEndpointRevisionWeightsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LambdaWebFunctionEndpointRevisionWeightsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.resetRevisionId">ResetRevisionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRevisionId` <a name="ResetRevisionId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.resetRevisionId"></a>

```go
func ResetRevisionId()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.revisionIdInput">RevisionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.revisionId">RevisionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RevisionIdInput`<sup>Optional</sup> <a name="RevisionIdInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.revisionIdInput"></a>

```go
func RevisionIdInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `RevisionId`<sup>Required</sup> <a name="RevisionId" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.revisionId"></a>

```go
func RevisionId() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointRevisionWeightsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaWebFunctionEndpointScalingConfigOutputReference <a name="LambdaWebFunctionEndpointScalingConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

lambdawebfunctionendpoint.NewLambdaWebFunctionEndpointScalingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaWebFunctionEndpointScalingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.resetMaxEnvironments">ResetMaxEnvironments</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxEnvironments` <a name="ResetMaxEnvironments" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.resetMaxEnvironments"></a>

```go
func ResetMaxEnvironments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.maxEnvironmentsInput">MaxEnvironmentsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.maxEnvironments">MaxEnvironments</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxEnvironmentsInput`<sup>Optional</sup> <a name="MaxEnvironmentsInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.maxEnvironmentsInput"></a>

```go
func MaxEnvironmentsInput() *f64
```

- *Type:* *f64

---

##### `MaxEnvironments`<sup>Required</sup> <a name="MaxEnvironments" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.maxEnvironments"></a>

```go
func MaxEnvironments() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointScalingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LambdaWebFunctionEndpointThrottleConfigOutputReference <a name="LambdaWebFunctionEndpointThrottleConfigOutputReference" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lambdawebfunctionendpoint"

lambdawebfunctionendpoint.NewLambdaWebFunctionEndpointThrottleConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LambdaWebFunctionEndpointThrottleConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.resetRateLimit">ResetRateLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRateLimit` <a name="ResetRateLimit" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.resetRateLimit"></a>

```go
func ResetRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.rateLimitInput">RateLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.rateLimit">RateLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RateLimitInput`<sup>Optional</sup> <a name="RateLimitInput" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.rateLimitInput"></a>

```go
func RateLimitInput() *f64
```

- *Type:* *f64

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.rateLimit"></a>

```go
func RateLimit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lambdaWebFunctionEndpoint.LambdaWebFunctionEndpointThrottleConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



