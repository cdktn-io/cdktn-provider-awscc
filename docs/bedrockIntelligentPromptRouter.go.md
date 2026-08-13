# `bedrockIntelligentPromptRouter` Submodule <a name="`bedrockIntelligentPromptRouter` Submodule" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockIntelligentPromptRouter <a name="BedrockIntelligentPromptRouter" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router awscc_bedrock_intelligent_prompt_router}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockintelligentpromptrouter"

bedrockintelligentpromptrouter.NewBedrockIntelligentPromptRouter(scope Construct, id *string, config BedrockIntelligentPromptRouterConfig) BedrockIntelligentPromptRouter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig">BedrockIntelligentPromptRouterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig">BedrockIntelligentPromptRouterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putFallbackModel">PutFallbackModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putModels">PutModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putRoutingCriteria">PutRoutingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFallbackModel` <a name="PutFallbackModel" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putFallbackModel"></a>

```go
func PutFallbackModel(value BedrockIntelligentPromptRouterFallbackModel)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putFallbackModel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a>

---

##### `PutModels` <a name="PutModels" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putModels"></a>

```go
func PutModels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putModels.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRoutingCriteria` <a name="PutRoutingCriteria" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putRoutingCriteria"></a>

```go
func PutRoutingCriteria(value BedrockIntelligentPromptRouterRoutingCriteria)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putRoutingCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockIntelligentPromptRouter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockintelligentpromptrouter"

bedrockintelligentpromptrouter.BedrockIntelligentPromptRouter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockintelligentpromptrouter"

bedrockintelligentpromptrouter.BedrockIntelligentPromptRouter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockintelligentpromptrouter"

bedrockintelligentpromptrouter.BedrockIntelligentPromptRouter_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockintelligentpromptrouter"

bedrockintelligentpromptrouter.BedrockIntelligentPromptRouter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BedrockIntelligentPromptRouter resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockIntelligentPromptRouter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockIntelligentPromptRouter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BedrockIntelligentPromptRouter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fallbackModel">FallbackModel</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference">BedrockIntelligentPromptRouterFallbackModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.models">Models</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList">BedrockIntelligentPromptRouterModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterArn">PromptRouterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.routingCriteria">RoutingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference">BedrockIntelligentPromptRouterRoutingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList">BedrockIntelligentPromptRouterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fallbackModelInput">FallbackModelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.modelsInput">ModelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterNameInput">PromptRouterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.routingCriteriaInput">RoutingCriteriaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterName">PromptRouterName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `FallbackModel`<sup>Required</sup> <a name="FallbackModel" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fallbackModel"></a>

```go
func FallbackModel() BedrockIntelligentPromptRouterFallbackModelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference">BedrockIntelligentPromptRouterFallbackModelOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Models`<sup>Required</sup> <a name="Models" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.models"></a>

```go
func Models() BedrockIntelligentPromptRouterModelsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList">BedrockIntelligentPromptRouterModelsList</a>

---

##### `PromptRouterArn`<sup>Required</sup> <a name="PromptRouterArn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterArn"></a>

```go
func PromptRouterArn() *string
```

- *Type:* *string

---

##### `RoutingCriteria`<sup>Required</sup> <a name="RoutingCriteria" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.routingCriteria"></a>

```go
func RoutingCriteria() BedrockIntelligentPromptRouterRoutingCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference">BedrockIntelligentPromptRouterRoutingCriteriaOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tags"></a>

```go
func Tags() BedrockIntelligentPromptRouterTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList">BedrockIntelligentPromptRouterTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FallbackModelInput`<sup>Optional</sup> <a name="FallbackModelInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fallbackModelInput"></a>

```go
func FallbackModelInput() interface{}
```

- *Type:* interface{}

---

##### `ModelsInput`<sup>Optional</sup> <a name="ModelsInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.modelsInput"></a>

```go
func ModelsInput() interface{}
```

- *Type:* interface{}

---

##### `PromptRouterNameInput`<sup>Optional</sup> <a name="PromptRouterNameInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterNameInput"></a>

```go
func PromptRouterNameInput() *string
```

- *Type:* *string

---

##### `RoutingCriteriaInput`<sup>Optional</sup> <a name="RoutingCriteriaInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.routingCriteriaInput"></a>

```go
func RoutingCriteriaInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `PromptRouterName`<sup>Required</sup> <a name="PromptRouterName" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterName"></a>

```go
func PromptRouterName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockIntelligentPromptRouterConfig <a name="BedrockIntelligentPromptRouterConfig" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockintelligentpromptrouter"

&bedrockintelligentpromptrouter.BedrockIntelligentPromptRouterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FallbackModel: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel,
	Models: interface{},
	PromptRouterName: *string,
	RoutingCriteria: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria,
	Description: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.fallbackModel">FallbackModel</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a></code> | Model configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.models">Models</a></code> | <code>interface{}</code> | List of model configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.promptRouterName">PromptRouterName</a></code> | <code>*string</code> | Name of the Prompt Router. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.routingCriteria">RoutingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a></code> | Represents the criteria used for routing requests. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.description">Description</a></code> | <code>*string</code> | Description of the Prompt Router. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.tags">Tags</a></code> | <code>interface{}</code> | List of Tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FallbackModel`<sup>Required</sup> <a name="FallbackModel" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.fallbackModel"></a>

```go
FallbackModel BedrockIntelligentPromptRouterFallbackModel
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a>

Model configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#fallback_model BedrockIntelligentPromptRouter#fallback_model}

---

##### `Models`<sup>Required</sup> <a name="Models" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.models"></a>

```go
Models interface{}
```

- *Type:* interface{}

List of model configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#models BedrockIntelligentPromptRouter#models}

---

##### `PromptRouterName`<sup>Required</sup> <a name="PromptRouterName" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.promptRouterName"></a>

```go
PromptRouterName *string
```

- *Type:* *string

Name of the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#prompt_router_name BedrockIntelligentPromptRouter#prompt_router_name}

---

##### `RoutingCriteria`<sup>Required</sup> <a name="RoutingCriteria" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.routingCriteria"></a>

```go
RoutingCriteria BedrockIntelligentPromptRouterRoutingCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a>

Represents the criteria used for routing requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#routing_criteria BedrockIntelligentPromptRouter#routing_criteria}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#description BedrockIntelligentPromptRouter#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

List of Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#tags BedrockIntelligentPromptRouter#tags}

---

### BedrockIntelligentPromptRouterFallbackModel <a name="BedrockIntelligentPromptRouterFallbackModel" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockintelligentpromptrouter"

&bedrockintelligentpromptrouter.BedrockIntelligentPromptRouterFallbackModel {
	ModelArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel.property.modelArn">ModelArn</a></code> | <code>*string</code> | Arn of underlying model which are added in the Prompt Router. |

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel.property.modelArn"></a>

```go
ModelArn *string
```

- *Type:* *string

Arn of underlying model which are added in the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#model_arn BedrockIntelligentPromptRouter#model_arn}

---

### BedrockIntelligentPromptRouterModels <a name="BedrockIntelligentPromptRouterModels" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockintelligentpromptrouter"

&bedrockintelligentpromptrouter.BedrockIntelligentPromptRouterModels {
	ModelArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels.property.modelArn">ModelArn</a></code> | <code>*string</code> | Arn of underlying model which are added in the Prompt Router. |

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels.property.modelArn"></a>

```go
ModelArn *string
```

- *Type:* *string

Arn of underlying model which are added in the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#model_arn BedrockIntelligentPromptRouter#model_arn}

---

### BedrockIntelligentPromptRouterRoutingCriteria <a name="BedrockIntelligentPromptRouterRoutingCriteria" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockintelligentpromptrouter"

&bedrockintelligentpromptrouter.BedrockIntelligentPromptRouterRoutingCriteria {
	ResponseQualityDifference: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria.property.responseQualityDifference">ResponseQualityDifference</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#response_quality_difference BedrockIntelligentPromptRouter#response_quality_difference}. |

---

##### `ResponseQualityDifference`<sup>Required</sup> <a name="ResponseQualityDifference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria.property.responseQualityDifference"></a>

```go
ResponseQualityDifference *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#response_quality_difference BedrockIntelligentPromptRouter#response_quality_difference}.

---

### BedrockIntelligentPromptRouterTags <a name="BedrockIntelligentPromptRouterTags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockintelligentpromptrouter"

&bedrockintelligentpromptrouter.BedrockIntelligentPromptRouterTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.property.key">Key</a></code> | <code>*string</code> | Tag Key. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.property.value">Value</a></code> | <code>*string</code> | Tag Value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Tag Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#key BedrockIntelligentPromptRouter#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Tag Value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#value BedrockIntelligentPromptRouter#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockIntelligentPromptRouterFallbackModelOutputReference <a name="BedrockIntelligentPromptRouterFallbackModelOutputReference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockintelligentpromptrouter"

bedrockintelligentpromptrouter.NewBedrockIntelligentPromptRouterFallbackModelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockIntelligentPromptRouterFallbackModelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArnInput">ModelArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArn">ModelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelArnInput`<sup>Optional</sup> <a name="ModelArnInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArnInput"></a>

```go
func ModelArnInput() *string
```

- *Type:* *string

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArn"></a>

```go
func ModelArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockIntelligentPromptRouterModelsList <a name="BedrockIntelligentPromptRouterModelsList" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockintelligentpromptrouter"

bedrockintelligentpromptrouter.NewBedrockIntelligentPromptRouterModelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockIntelligentPromptRouterModelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.get"></a>

```go
func Get(index *f64) BedrockIntelligentPromptRouterModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockIntelligentPromptRouterModelsOutputReference <a name="BedrockIntelligentPromptRouterModelsOutputReference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockintelligentpromptrouter"

bedrockintelligentpromptrouter.NewBedrockIntelligentPromptRouterModelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockIntelligentPromptRouterModelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.modelArnInput">ModelArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.modelArn">ModelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelArnInput`<sup>Optional</sup> <a name="ModelArnInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.modelArnInput"></a>

```go
func ModelArnInput() *string
```

- *Type:* *string

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.modelArn"></a>

```go
func ModelArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockIntelligentPromptRouterRoutingCriteriaOutputReference <a name="BedrockIntelligentPromptRouterRoutingCriteriaOutputReference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockintelligentpromptrouter"

bedrockintelligentpromptrouter.NewBedrockIntelligentPromptRouterRoutingCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockIntelligentPromptRouterRoutingCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifferenceInput">ResponseQualityDifferenceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifference">ResponseQualityDifference</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResponseQualityDifferenceInput`<sup>Optional</sup> <a name="ResponseQualityDifferenceInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifferenceInput"></a>

```go
func ResponseQualityDifferenceInput() *f64
```

- *Type:* *f64

---

##### `ResponseQualityDifference`<sup>Required</sup> <a name="ResponseQualityDifference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifference"></a>

```go
func ResponseQualityDifference() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockIntelligentPromptRouterTagsList <a name="BedrockIntelligentPromptRouterTagsList" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockintelligentpromptrouter"

bedrockintelligentpromptrouter.NewBedrockIntelligentPromptRouterTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockIntelligentPromptRouterTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.get"></a>

```go
func Get(index *f64) BedrockIntelligentPromptRouterTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockIntelligentPromptRouterTagsOutputReference <a name="BedrockIntelligentPromptRouterTagsOutputReference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockintelligentpromptrouter"

bedrockintelligentpromptrouter.NewBedrockIntelligentPromptRouterTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockIntelligentPromptRouterTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



