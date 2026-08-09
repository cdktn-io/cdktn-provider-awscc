# `apigatewayUsagePlan` Submodule <a name="`apigatewayUsagePlan` Submodule" id="@cdktn/provider-awscc.apigatewayUsagePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayUsagePlan <a name="ApigatewayUsagePlan" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan awscc_apigateway_usage_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayusageplan"

apigatewayusageplan.NewApigatewayUsagePlan(scope Construct, id *string, config ApigatewayUsagePlanConfig) ApigatewayUsagePlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig">ApigatewayUsagePlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig">ApigatewayUsagePlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putApiStages">PutApiStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putQuota">PutQuota</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putThrottle">PutThrottle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetApiStages">ResetApiStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetQuota">ResetQuota</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetThrottle">ResetThrottle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetUsagePlanName">ResetUsagePlanName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApiStages` <a name="PutApiStages" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putApiStages"></a>

```go
func PutApiStages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putApiStages.parameter.value"></a>

- *Type:* interface{}

---

##### `PutQuota` <a name="PutQuota" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putQuota"></a>

```go
func PutQuota(value ApigatewayUsagePlanQuota)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutThrottle` <a name="PutThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putThrottle"></a>

```go
func PutThrottle(value ApigatewayUsagePlanThrottle)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putThrottle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a>

---

##### `ResetApiStages` <a name="ResetApiStages" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetApiStages"></a>

```go
func ResetApiStages()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetQuota` <a name="ResetQuota" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetQuota"></a>

```go
func ResetQuota()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetTags"></a>

```go
func ResetTags()
```

##### `ResetThrottle` <a name="ResetThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetThrottle"></a>

```go
func ResetThrottle()
```

##### `ResetUsagePlanName` <a name="ResetUsagePlanName" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetUsagePlanName"></a>

```go
func ResetUsagePlanName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayUsagePlan resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayusageplan"

apigatewayusageplan.ApigatewayUsagePlan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayusageplan"

apigatewayusageplan.ApigatewayUsagePlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayusageplan"

apigatewayusageplan.ApigatewayUsagePlan_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayusageplan"

apigatewayusageplan.ApigatewayUsagePlan_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ApigatewayUsagePlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApigatewayUsagePlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApigatewayUsagePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayUsagePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.apiStages">ApiStages</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList">ApigatewayUsagePlanApiStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.quota">Quota</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference">ApigatewayUsagePlanQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList">ApigatewayUsagePlanTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.throttle">Throttle</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference">ApigatewayUsagePlanThrottleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanId">UsagePlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.apiStagesInput">ApiStagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.quotaInput">QuotaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.throttleInput">ThrottleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanNameInput">UsagePlanNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanName">UsagePlanName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiStages`<sup>Required</sup> <a name="ApiStages" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.apiStages"></a>

```go
func ApiStages() ApigatewayUsagePlanApiStagesList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList">ApigatewayUsagePlanApiStagesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Quota`<sup>Required</sup> <a name="Quota" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.quota"></a>

```go
func Quota() ApigatewayUsagePlanQuotaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference">ApigatewayUsagePlanQuotaOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tags"></a>

```go
func Tags() ApigatewayUsagePlanTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList">ApigatewayUsagePlanTagsList</a>

---

##### `Throttle`<sup>Required</sup> <a name="Throttle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.throttle"></a>

```go
func Throttle() ApigatewayUsagePlanThrottleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference">ApigatewayUsagePlanThrottleOutputReference</a>

---

##### `UsagePlanId`<sup>Required</sup> <a name="UsagePlanId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanId"></a>

```go
func UsagePlanId() *string
```

- *Type:* *string

---

##### `ApiStagesInput`<sup>Optional</sup> <a name="ApiStagesInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.apiStagesInput"></a>

```go
func ApiStagesInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `QuotaInput`<sup>Optional</sup> <a name="QuotaInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.quotaInput"></a>

```go
func QuotaInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ThrottleInput`<sup>Optional</sup> <a name="ThrottleInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.throttleInput"></a>

```go
func ThrottleInput() interface{}
```

- *Type:* interface{}

---

##### `UsagePlanNameInput`<sup>Optional</sup> <a name="UsagePlanNameInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanNameInput"></a>

```go
func UsagePlanNameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `UsagePlanName`<sup>Required</sup> <a name="UsagePlanName" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanName"></a>

```go
func UsagePlanName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayUsagePlanApiStages <a name="ApigatewayUsagePlanApiStages" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayusageplan"

&apigatewayusageplan.ApigatewayUsagePlanApiStages {
	ApiId: *string,
	Stage: *string,
	Throttle: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.apiId">ApiId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#api_id ApigatewayUsagePlan#api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.stage">Stage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#stage ApigatewayUsagePlan#stage}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.throttle">Throttle</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#throttle ApigatewayUsagePlan#throttle}. |

---

##### `ApiId`<sup>Optional</sup> <a name="ApiId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.apiId"></a>

```go
ApiId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#api_id ApigatewayUsagePlan#api_id}.

---

##### `Stage`<sup>Optional</sup> <a name="Stage" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.stage"></a>

```go
Stage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#stage ApigatewayUsagePlan#stage}.

---

##### `Throttle`<sup>Optional</sup> <a name="Throttle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.throttle"></a>

```go
Throttle interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#throttle ApigatewayUsagePlan#throttle}.

---

### ApigatewayUsagePlanApiStagesThrottle <a name="ApigatewayUsagePlanApiStagesThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayusageplan"

&apigatewayusageplan.ApigatewayUsagePlanApiStagesThrottle {
	BurstLimit: *f64,
	RateLimit: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle.property.burstLimit">BurstLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#burst_limit ApigatewayUsagePlan#burst_limit}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle.property.rateLimit">RateLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#rate_limit ApigatewayUsagePlan#rate_limit}. |

---

##### `BurstLimit`<sup>Optional</sup> <a name="BurstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle.property.burstLimit"></a>

```go
BurstLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#burst_limit ApigatewayUsagePlan#burst_limit}.

---

##### `RateLimit`<sup>Optional</sup> <a name="RateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle.property.rateLimit"></a>

```go
RateLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#rate_limit ApigatewayUsagePlan#rate_limit}.

---

### ApigatewayUsagePlanConfig <a name="ApigatewayUsagePlanConfig" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayusageplan"

&apigatewayusageplan.ApigatewayUsagePlanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApiStages: interface{},
	Description: *string,
	Quota: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota,
	Tags: interface{},
	Throttle: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle,
	UsagePlanName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.apiStages">ApiStages</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#api_stages ApigatewayUsagePlan#api_stages}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#description ApigatewayUsagePlan#description}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.quota">Quota</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a></code> | ``QuotaSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies a target for the maximum number of requests users can make to your REST APIs.  In some cases clients can exceed the targets that you set. Don?t rely on usage plans to control costs. Consider using [](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#tags ApigatewayUsagePlan#tags}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.throttle">Throttle</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a></code> | ``ThrottleSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies the overall request rate (average requests per second) and burst capacity when users call your REST APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.usagePlanName">UsagePlanName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#usage_plan_name ApigatewayUsagePlan#usage_plan_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApiStages`<sup>Optional</sup> <a name="ApiStages" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.apiStages"></a>

```go
ApiStages interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#api_stages ApigatewayUsagePlan#api_stages}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#description ApigatewayUsagePlan#description}.

---

##### `Quota`<sup>Optional</sup> <a name="Quota" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.quota"></a>

```go
Quota ApigatewayUsagePlanQuota
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a>

``QuotaSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies a target for the maximum number of requests users can make to your REST APIs.  In some cases clients can exceed the targets that you set. Don?t rely on usage plans to control costs. Consider using [](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#quota ApigatewayUsagePlan#quota}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#tags ApigatewayUsagePlan#tags}.

---

##### `Throttle`<sup>Optional</sup> <a name="Throttle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.throttle"></a>

```go
Throttle ApigatewayUsagePlanThrottle
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a>

``ThrottleSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies the overall request rate (average requests per second) and burst capacity when users call your REST APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#throttle ApigatewayUsagePlan#throttle}

---

##### `UsagePlanName`<sup>Optional</sup> <a name="UsagePlanName" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.usagePlanName"></a>

```go
UsagePlanName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#usage_plan_name ApigatewayUsagePlan#usage_plan_name}.

---

### ApigatewayUsagePlanQuota <a name="ApigatewayUsagePlanQuota" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayusageplan"

&apigatewayusageplan.ApigatewayUsagePlanQuota {
	Limit: *f64,
	Offset: *f64,
	Period: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.limit">Limit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#limit ApigatewayUsagePlan#limit}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.offset">Offset</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#offset ApigatewayUsagePlan#offset}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.period">Period</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#period ApigatewayUsagePlan#period}. |

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.limit"></a>

```go
Limit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#limit ApigatewayUsagePlan#limit}.

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.offset"></a>

```go
Offset *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#offset ApigatewayUsagePlan#offset}.

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.period"></a>

```go
Period *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#period ApigatewayUsagePlan#period}.

---

### ApigatewayUsagePlanTags <a name="ApigatewayUsagePlanTags" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayusageplan"

&apigatewayusageplan.ApigatewayUsagePlanTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags.property.key">Key</a></code> | <code>*string</code> | A string you can use to assign a value. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags.property.value">Value</a></code> | <code>*string</code> | The value for the specified tag key. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

A string you can use to assign a value.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#key ApigatewayUsagePlan#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#value ApigatewayUsagePlan#value}

---

### ApigatewayUsagePlanThrottle <a name="ApigatewayUsagePlanThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayusageplan"

&apigatewayusageplan.ApigatewayUsagePlanThrottle {
	BurstLimit: *f64,
	RateLimit: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle.property.burstLimit">BurstLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#burst_limit ApigatewayUsagePlan#burst_limit}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle.property.rateLimit">RateLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#rate_limit ApigatewayUsagePlan#rate_limit}. |

---

##### `BurstLimit`<sup>Optional</sup> <a name="BurstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle.property.burstLimit"></a>

```go
BurstLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#burst_limit ApigatewayUsagePlan#burst_limit}.

---

##### `RateLimit`<sup>Optional</sup> <a name="RateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle.property.rateLimit"></a>

```go
RateLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/apigateway_usage_plan#rate_limit ApigatewayUsagePlan#rate_limit}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayUsagePlanApiStagesList <a name="ApigatewayUsagePlanApiStagesList" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayusageplan"

apigatewayusageplan.NewApigatewayUsagePlanApiStagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigatewayUsagePlanApiStagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.get"></a>

```go
func Get(index *f64) ApigatewayUsagePlanApiStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigatewayUsagePlanApiStagesOutputReference <a name="ApigatewayUsagePlanApiStagesOutputReference" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayusageplan"

apigatewayusageplan.NewApigatewayUsagePlanApiStagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigatewayUsagePlanApiStagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.putThrottle">PutThrottle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetApiId">ResetApiId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetStage">ResetStage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetThrottle">ResetThrottle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutThrottle` <a name="PutThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.putThrottle"></a>

```go
func PutThrottle(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.putThrottle.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApiId` <a name="ResetApiId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetApiId"></a>

```go
func ResetApiId()
```

##### `ResetStage` <a name="ResetStage" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetStage"></a>

```go
func ResetStage()
```

##### `ResetThrottle` <a name="ResetThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetThrottle"></a>

```go
func ResetThrottle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.throttle">Throttle</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap">ApigatewayUsagePlanApiStagesThrottleMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.apiIdInput">ApiIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.stageInput">StageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.throttleInput">ThrottleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.apiId">ApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.stage">Stage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Throttle`<sup>Required</sup> <a name="Throttle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.throttle"></a>

```go
func Throttle() ApigatewayUsagePlanApiStagesThrottleMap
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap">ApigatewayUsagePlanApiStagesThrottleMap</a>

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.apiIdInput"></a>

```go
func ApiIdInput() *string
```

- *Type:* *string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.stageInput"></a>

```go
func StageInput() *string
```

- *Type:* *string

---

##### `ThrottleInput`<sup>Optional</sup> <a name="ThrottleInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.throttleInput"></a>

```go
func ThrottleInput() interface{}
```

- *Type:* interface{}

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.apiId"></a>

```go
func ApiId() *string
```

- *Type:* *string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.stage"></a>

```go
func Stage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigatewayUsagePlanApiStagesThrottleMap <a name="ApigatewayUsagePlanApiStagesThrottleMap" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayusageplan"

apigatewayusageplan.NewApigatewayUsagePlanApiStagesThrottleMap(terraformResource IInterpolatingParent, terraformAttribute *string) ApigatewayUsagePlanApiStagesThrottleMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.get"></a>

```go
func Get(key *string) ApigatewayUsagePlanApiStagesThrottleOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigatewayUsagePlanApiStagesThrottleOutputReference <a name="ApigatewayUsagePlanApiStagesThrottleOutputReference" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayusageplan"

apigatewayusageplan.NewApigatewayUsagePlanApiStagesThrottleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) ApigatewayUsagePlanApiStagesThrottleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resetBurstLimit">ResetBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resetRateLimit">ResetRateLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBurstLimit` <a name="ResetBurstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resetBurstLimit"></a>

```go
func ResetBurstLimit()
```

##### `ResetRateLimit` <a name="ResetRateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resetRateLimit"></a>

```go
func ResetRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimitInput">BurstLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimitInput">RateLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimit">BurstLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimit">RateLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BurstLimitInput`<sup>Optional</sup> <a name="BurstLimitInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimitInput"></a>

```go
func BurstLimitInput() *f64
```

- *Type:* *f64

---

##### `RateLimitInput`<sup>Optional</sup> <a name="RateLimitInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimitInput"></a>

```go
func RateLimitInput() *f64
```

- *Type:* *f64

---

##### `BurstLimit`<sup>Required</sup> <a name="BurstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimit"></a>

```go
func BurstLimit() *f64
```

- *Type:* *f64

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimit"></a>

```go
func RateLimit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigatewayUsagePlanQuotaOutputReference <a name="ApigatewayUsagePlanQuotaOutputReference" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayusageplan"

apigatewayusageplan.NewApigatewayUsagePlanQuotaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigatewayUsagePlanQuotaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetOffset">ResetOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLimit` <a name="ResetLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetLimit"></a>

```go
func ResetLimit()
```

##### `ResetOffset` <a name="ResetOffset" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetOffset"></a>

```go
func ResetOffset()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetPeriod"></a>

```go
func ResetPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.limitInput">LimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.offsetInput">OffsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.periodInput">PeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.limit">Limit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.offset">Offset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.period">Period</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.limitInput"></a>

```go
func LimitInput() *f64
```

- *Type:* *f64

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.offsetInput"></a>

```go
func OffsetInput() *f64
```

- *Type:* *f64

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.periodInput"></a>

```go
func PeriodInput() *string
```

- *Type:* *string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.limit"></a>

```go
func Limit() *f64
```

- *Type:* *f64

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.offset"></a>

```go
func Offset() *f64
```

- *Type:* *f64

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.period"></a>

```go
func Period() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigatewayUsagePlanTagsList <a name="ApigatewayUsagePlanTagsList" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayusageplan"

apigatewayusageplan.NewApigatewayUsagePlanTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigatewayUsagePlanTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.get"></a>

```go
func Get(index *f64) ApigatewayUsagePlanTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigatewayUsagePlanTagsOutputReference <a name="ApigatewayUsagePlanTagsOutputReference" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayusageplan"

apigatewayusageplan.NewApigatewayUsagePlanTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigatewayUsagePlanTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigatewayUsagePlanThrottleOutputReference <a name="ApigatewayUsagePlanThrottleOutputReference" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/apigatewayusageplan"

apigatewayusageplan.NewApigatewayUsagePlanThrottleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigatewayUsagePlanThrottleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resetBurstLimit">ResetBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resetRateLimit">ResetRateLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBurstLimit` <a name="ResetBurstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resetBurstLimit"></a>

```go
func ResetBurstLimit()
```

##### `ResetRateLimit` <a name="ResetRateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resetRateLimit"></a>

```go
func ResetRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.burstLimitInput">BurstLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.rateLimitInput">RateLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.burstLimit">BurstLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.rateLimit">RateLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BurstLimitInput`<sup>Optional</sup> <a name="BurstLimitInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.burstLimitInput"></a>

```go
func BurstLimitInput() *f64
```

- *Type:* *f64

---

##### `RateLimitInput`<sup>Optional</sup> <a name="RateLimitInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.rateLimitInput"></a>

```go
func RateLimitInput() *f64
```

- *Type:* *f64

---

##### `BurstLimit`<sup>Required</sup> <a name="BurstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.burstLimit"></a>

```go
func BurstLimit() *f64
```

- *Type:* *f64

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.rateLimit"></a>

```go
func RateLimit() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



