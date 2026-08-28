# `ssmincidentsResponsePlan` Submodule <a name="`ssmincidentsResponsePlan` Submodule" id="@cdktn/provider-awscc.ssmincidentsResponsePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmincidentsResponsePlan <a name="SsmincidentsResponsePlan" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan awscc_ssmincidents_response_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlan(scope Construct, id *string, config SsmincidentsResponsePlanConfig) SsmincidentsResponsePlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig">SsmincidentsResponsePlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig">SsmincidentsResponsePlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putChatChannel">PutChatChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate">PutIncidentTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIntegrations">PutIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetChatChannel">ResetChatChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetEngagements">ResetEngagements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetIntegrations">ResetIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActions` <a name="PutActions" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putActions"></a>

```go
func PutActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putActions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutChatChannel` <a name="PutChatChannel" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putChatChannel"></a>

```go
func PutChatChannel(value SsmincidentsResponsePlanChatChannel)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putChatChannel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a>

---

##### `PutIncidentTemplate` <a name="PutIncidentTemplate" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate"></a>

```go
func PutIncidentTemplate(value SsmincidentsResponsePlanIncidentTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIncidentTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

---

##### `PutIntegrations` <a name="PutIntegrations" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIntegrations"></a>

```go
func PutIntegrations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putIntegrations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetActions` <a name="ResetActions" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetActions"></a>

```go
func ResetActions()
```

##### `ResetChatChannel` <a name="ResetChatChannel" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetChatChannel"></a>

```go
func ResetChatChannel()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEngagements` <a name="ResetEngagements" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetEngagements"></a>

```go
func ResetEngagements()
```

##### `ResetIntegrations` <a name="ResetIntegrations" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetIntegrations"></a>

```go
func ResetIntegrations()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmincidentsResponsePlan resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.SsmincidentsResponsePlan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.SsmincidentsResponsePlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.SsmincidentsResponsePlan_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.SsmincidentsResponsePlan_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SsmincidentsResponsePlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SsmincidentsResponsePlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SsmincidentsResponsePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SsmincidentsResponsePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList">SsmincidentsResponsePlanActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannel">ChatChannel</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference">SsmincidentsResponsePlanChatChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplate">IncidentTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference">SsmincidentsResponsePlanIncidentTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integrations">Integrations</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList">SsmincidentsResponsePlanIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList">SsmincidentsResponsePlanTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.actionsInput">ActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannelInput">ChatChannelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagementsInput">EngagementsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplateInput">IncidentTemplateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integrationsInput">IntegrationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagements">Engagements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.actions"></a>

```go
func Actions() SsmincidentsResponsePlanActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList">SsmincidentsResponsePlanActionsList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ChatChannel`<sup>Required</sup> <a name="ChatChannel" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannel"></a>

```go
func ChatChannel() SsmincidentsResponsePlanChatChannelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference">SsmincidentsResponsePlanChatChannelOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncidentTemplate`<sup>Required</sup> <a name="IncidentTemplate" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplate"></a>

```go
func IncidentTemplate() SsmincidentsResponsePlanIncidentTemplateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference">SsmincidentsResponsePlanIncidentTemplateOutputReference</a>

---

##### `Integrations`<sup>Required</sup> <a name="Integrations" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integrations"></a>

```go
func Integrations() SsmincidentsResponsePlanIntegrationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList">SsmincidentsResponsePlanIntegrationsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tags"></a>

```go
func Tags() SsmincidentsResponsePlanTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList">SsmincidentsResponsePlanTagsList</a>

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.actionsInput"></a>

```go
func ActionsInput() interface{}
```

- *Type:* interface{}

---

##### `ChatChannelInput`<sup>Optional</sup> <a name="ChatChannelInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.chatChannelInput"></a>

```go
func ChatChannelInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EngagementsInput`<sup>Optional</sup> <a name="EngagementsInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagementsInput"></a>

```go
func EngagementsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncidentTemplateInput`<sup>Optional</sup> <a name="IncidentTemplateInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.incidentTemplateInput"></a>

```go
func IncidentTemplateInput() interface{}
```

- *Type:* interface{}

---

##### `IntegrationsInput`<sup>Optional</sup> <a name="IntegrationsInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.integrationsInput"></a>

```go
func IntegrationsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Engagements`<sup>Required</sup> <a name="Engagements" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.engagements"></a>

```go
func Engagements() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmincidentsResponsePlanActions <a name="SsmincidentsResponsePlanActions" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

&ssmincidentsresponseplan.SsmincidentsResponsePlanActions {
	SsmAutomation: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions.property.ssmAutomation">SsmAutomation</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a></code> | The configuration to use when starting the SSM automation document. |

---

##### `SsmAutomation`<sup>Optional</sup> <a name="SsmAutomation" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActions.property.ssmAutomation"></a>

```go
SsmAutomation SsmincidentsResponsePlanActionsSsmAutomation
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a>

The configuration to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#ssm_automation SsmincidentsResponsePlan#ssm_automation}

---

### SsmincidentsResponsePlanActionsSsmAutomation <a name="SsmincidentsResponsePlanActionsSsmAutomation" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

&ssmincidentsresponseplan.SsmincidentsResponsePlanActionsSsmAutomation {
	DocumentName: *string,
	DocumentVersion: *string,
	DynamicParameters: interface{},
	Parameters: interface{},
	RoleArn: *string,
	TargetAccount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.documentName">DocumentName</a></code> | <code>*string</code> | The document name to use when starting the SSM automation document. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.documentVersion">DocumentVersion</a></code> | <code>*string</code> | The version of the document to use when starting the SSM automation document. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.dynamicParameters">DynamicParameters</a></code> | <code>interface{}</code> | The parameters with dynamic values to set when starting the SSM automation document. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.parameters">Parameters</a></code> | <code>interface{}</code> | The parameters to set when starting the SSM automation document. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.roleArn">RoleArn</a></code> | <code>*string</code> | The role ARN to use when starting the SSM automation document. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.targetAccount">TargetAccount</a></code> | <code>*string</code> | The account type to use when starting the SSM automation document. |

---

##### `DocumentName`<sup>Optional</sup> <a name="DocumentName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.documentName"></a>

```go
DocumentName *string
```

- *Type:* *string

The document name to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#document_name SsmincidentsResponsePlan#document_name}

---

##### `DocumentVersion`<sup>Optional</sup> <a name="DocumentVersion" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.documentVersion"></a>

```go
DocumentVersion *string
```

- *Type:* *string

The version of the document to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#document_version SsmincidentsResponsePlan#document_version}

---

##### `DynamicParameters`<sup>Optional</sup> <a name="DynamicParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.dynamicParameters"></a>

```go
DynamicParameters interface{}
```

- *Type:* interface{}

The parameters with dynamic values to set when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#dynamic_parameters SsmincidentsResponsePlan#dynamic_parameters}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

The parameters to set when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#parameters SsmincidentsResponsePlan#parameters}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The role ARN to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#role_arn SsmincidentsResponsePlan#role_arn}

---

##### `TargetAccount`<sup>Optional</sup> <a name="TargetAccount" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation.property.targetAccount"></a>

```go
TargetAccount *string
```

- *Type:* *string

The account type to use when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#target_account SsmincidentsResponsePlan#target_account}

---

### SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters <a name="SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

&ssmincidentsresponseplan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters {
	Key: *string,
	Value: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a></code> | Value of the dynamic parameter to set when starting the SSM automation document. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParameters.property.value"></a>

```go
Value SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a>

Value of the dynamic parameter to set when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}

---

### SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue <a name="SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

&ssmincidentsresponseplan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue {
	Variable: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue.property.variable">Variable</a></code> | <code>*string</code> | The variable types used as dynamic parameter value when starting the SSM automation document. |

---

##### `Variable`<sup>Optional</sup> <a name="Variable" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue.property.variable"></a>

```go
Variable *string
```

- *Type:* *string

The variable types used as dynamic parameter value when starting the SSM automation document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#variable SsmincidentsResponsePlan#variable}

---

### SsmincidentsResponsePlanActionsSsmAutomationParameters <a name="SsmincidentsResponsePlanActionsSsmAutomationParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

&ssmincidentsresponseplan.SsmincidentsResponsePlanActionsSsmAutomationParameters {
	Key: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#values SsmincidentsResponsePlan#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParameters.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#values SsmincidentsResponsePlan#values}.

---

### SsmincidentsResponsePlanChatChannel <a name="SsmincidentsResponsePlanChatChannel" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

&ssmincidentsresponseplan.SsmincidentsResponsePlanChatChannel {
	ChatbotSns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel.property.chatbotSns">ChatbotSns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#chatbot_sns SsmincidentsResponsePlan#chatbot_sns}. |

---

##### `ChatbotSns`<sup>Optional</sup> <a name="ChatbotSns" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel.property.chatbotSns"></a>

```go
ChatbotSns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#chatbot_sns SsmincidentsResponsePlan#chatbot_sns}.

---

### SsmincidentsResponsePlanConfig <a name="SsmincidentsResponsePlanConfig" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

&ssmincidentsresponseplan.SsmincidentsResponsePlanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	IncidentTemplate: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate,
	Name: *string,
	Actions: interface{},
	ChatChannel: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel,
	DisplayName: *string,
	Engagements: *[]*string,
	Integrations: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.incidentTemplate">IncidentTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a></code> | The incident template configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.name">Name</a></code> | <code>*string</code> | The name of the response plan. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.actions">Actions</a></code> | <code>interface{}</code> | The list of actions. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.chatChannel">ChatChannel</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a></code> | The chat channel configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the response plan. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.engagements">Engagements</a></code> | <code>*[]*string</code> | The list of engagements to use. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.integrations">Integrations</a></code> | <code>interface{}</code> | The list of integrations. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags to apply to the response plan. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IncidentTemplate`<sup>Required</sup> <a name="IncidentTemplate" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.incidentTemplate"></a>

```go
IncidentTemplate SsmincidentsResponsePlanIncidentTemplate
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate">SsmincidentsResponsePlanIncidentTemplate</a>

The incident template configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#incident_template SsmincidentsResponsePlan#incident_template}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the response plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.actions"></a>

```go
Actions interface{}
```

- *Type:* interface{}

The list of actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#actions SsmincidentsResponsePlan#actions}

---

##### `ChatChannel`<sup>Optional</sup> <a name="ChatChannel" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.chatChannel"></a>

```go
ChatChannel SsmincidentsResponsePlanChatChannel
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannel">SsmincidentsResponsePlanChatChannel</a>

The chat channel configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#chat_channel SsmincidentsResponsePlan#chat_channel}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the response plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#display_name SsmincidentsResponsePlan#display_name}

---

##### `Engagements`<sup>Optional</sup> <a name="Engagements" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.engagements"></a>

```go
Engagements *[]*string
```

- *Type:* *[]*string

The list of engagements to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#engagements SsmincidentsResponsePlan#engagements}

---

##### `Integrations`<sup>Optional</sup> <a name="Integrations" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.integrations"></a>

```go
Integrations interface{}
```

- *Type:* interface{}

The list of integrations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#integrations SsmincidentsResponsePlan#integrations}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags to apply to the response plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#tags SsmincidentsResponsePlan#tags}

---

### SsmincidentsResponsePlanIncidentTemplate <a name="SsmincidentsResponsePlanIncidentTemplate" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

&ssmincidentsresponseplan.SsmincidentsResponsePlanIncidentTemplate {
	Impact: *f64,
	Title: *string,
	DedupeString: *string,
	IncidentTags: interface{},
	NotificationTargets: interface{},
	Summary: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.impact">Impact</a></code> | <code>*f64</code> | The impact value. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.title">Title</a></code> | <code>*string</code> | The title string. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.dedupeString">DedupeString</a></code> | <code>*string</code> | The deduplication string. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.incidentTags">IncidentTags</a></code> | <code>interface{}</code> | Tags that get applied to incidents created by the StartIncident API action. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.notificationTargets">NotificationTargets</a></code> | <code>interface{}</code> | The list of notification targets. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.summary">Summary</a></code> | <code>*string</code> | The summary string. |

---

##### `Impact`<sup>Required</sup> <a name="Impact" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.impact"></a>

```go
Impact *f64
```

- *Type:* *f64

The impact value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#impact SsmincidentsResponsePlan#impact}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.title"></a>

```go
Title *string
```

- *Type:* *string

The title string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#title SsmincidentsResponsePlan#title}

---

##### `DedupeString`<sup>Optional</sup> <a name="DedupeString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.dedupeString"></a>

```go
DedupeString *string
```

- *Type:* *string

The deduplication string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#dedupe_string SsmincidentsResponsePlan#dedupe_string}

---

##### `IncidentTags`<sup>Optional</sup> <a name="IncidentTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.incidentTags"></a>

```go
IncidentTags interface{}
```

- *Type:* interface{}

Tags that get applied to incidents created by the StartIncident API action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#incident_tags SsmincidentsResponsePlan#incident_tags}

---

##### `NotificationTargets`<sup>Optional</sup> <a name="NotificationTargets" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.notificationTargets"></a>

```go
NotificationTargets interface{}
```

- *Type:* interface{}

The list of notification targets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#notification_targets SsmincidentsResponsePlan#notification_targets}

---

##### `Summary`<sup>Optional</sup> <a name="Summary" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplate.property.summary"></a>

```go
Summary *string
```

- *Type:* *string

The summary string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#summary SsmincidentsResponsePlan#summary}

---

### SsmincidentsResponsePlanIncidentTemplateIncidentTags <a name="SsmincidentsResponsePlanIncidentTemplateIncidentTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

&ssmincidentsresponseplan.SsmincidentsResponsePlanIncidentTemplateIncidentTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}.

---

### SsmincidentsResponsePlanIncidentTemplateNotificationTargets <a name="SsmincidentsResponsePlanIncidentTemplateNotificationTargets" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

&ssmincidentsresponseplan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets {
	SnsTopicArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | The ARN of the Chatbot SNS topic. |

---

##### `SnsTopicArn`<sup>Optional</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargets.property.snsTopicArn"></a>

```go
SnsTopicArn *string
```

- *Type:* *string

The ARN of the Chatbot SNS topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#sns_topic_arn SsmincidentsResponsePlan#sns_topic_arn}

---

### SsmincidentsResponsePlanIntegrations <a name="SsmincidentsResponsePlanIntegrations" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

&ssmincidentsresponseplan.SsmincidentsResponsePlanIntegrations {
	PagerDutyConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations.property.pagerDutyConfiguration">PagerDutyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a></code> | The pagerDuty configuration to use when starting the incident. |

---

##### `PagerDutyConfiguration`<sup>Optional</sup> <a name="PagerDutyConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrations.property.pagerDutyConfiguration"></a>

```go
PagerDutyConfiguration SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a>

The pagerDuty configuration to use when starting the incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#pager_duty_configuration SsmincidentsResponsePlan#pager_duty_configuration}

---

### SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration <a name="SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

&ssmincidentsresponseplan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration {
	Name: *string,
	PagerDutyIncidentConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration,
	SecretId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.name">Name</a></code> | <code>*string</code> | The name of the pagerDuty configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.pagerDutyIncidentConfiguration">PagerDutyIncidentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a></code> | The pagerDuty incident configuration. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.secretId">SecretId</a></code> | <code>*string</code> | The AWS secrets manager secretId storing the pagerDuty token. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the pagerDuty configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#name SsmincidentsResponsePlan#name}

---

##### `PagerDutyIncidentConfiguration`<sup>Optional</sup> <a name="PagerDutyIncidentConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.pagerDutyIncidentConfiguration"></a>

```go
PagerDutyIncidentConfiguration SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a>

The pagerDuty incident configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#pager_duty_incident_configuration SsmincidentsResponsePlan#pager_duty_incident_configuration}

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

The AWS secrets manager secretId storing the pagerDuty token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#secret_id SsmincidentsResponsePlan#secret_id}

---

### SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration <a name="SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

&ssmincidentsresponseplan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration {
	ServiceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration.property.serviceId">ServiceId</a></code> | <code>*string</code> | The pagerDuty serviceId. |

---

##### `ServiceId`<sup>Optional</sup> <a name="ServiceId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration.property.serviceId"></a>

```go
ServiceId *string
```

- *Type:* *string

The pagerDuty serviceId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#service_id SsmincidentsResponsePlan#service_id}

---

### SsmincidentsResponsePlanTags <a name="SsmincidentsResponsePlanTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

&ssmincidentsresponseplan.SsmincidentsResponsePlanTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#key SsmincidentsResponsePlan#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmincidents_response_plan#value SsmincidentsResponsePlan#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmincidentsResponsePlanActionsList <a name="SsmincidentsResponsePlanActionsList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmincidentsResponsePlanActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.get"></a>

```go
func Get(index *f64) SsmincidentsResponsePlanActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanActionsOutputReference <a name="SsmincidentsResponsePlanActionsOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmincidentsResponsePlanActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.putSsmAutomation">PutSsmAutomation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.resetSsmAutomation">ResetSsmAutomation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSsmAutomation` <a name="PutSsmAutomation" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.putSsmAutomation"></a>

```go
func PutSsmAutomation(value SsmincidentsResponsePlanActionsSsmAutomation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.putSsmAutomation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomation">SsmincidentsResponsePlanActionsSsmAutomation</a>

---

##### `ResetSsmAutomation` <a name="ResetSsmAutomation" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.resetSsmAutomation"></a>

```go
func ResetSsmAutomation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.ssmAutomation">SsmAutomation</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference">SsmincidentsResponsePlanActionsSsmAutomationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.ssmAutomationInput">SsmAutomationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SsmAutomation`<sup>Required</sup> <a name="SsmAutomation" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.ssmAutomation"></a>

```go
func SsmAutomation() SsmincidentsResponsePlanActionsSsmAutomationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference">SsmincidentsResponsePlanActionsSsmAutomationOutputReference</a>

---

##### `SsmAutomationInput`<sup>Optional</sup> <a name="SsmAutomationInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.ssmAutomationInput"></a>

```go
func SsmAutomationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList <a name="SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.get"></a>

```go
func Get(index *f64) SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference <a name="SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.putValue"></a>

```go
func PutValue(value SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValue</a>

---

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.value"></a>

```go
func Value() SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference <a name="SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resetVariable">ResetVariable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVariable` <a name="ResetVariable" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.resetVariable"></a>

```go
func ResetVariable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.variableInput">VariableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.variable">Variable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.variableInput"></a>

```go
func VariableInput() *string
```

- *Type:* *string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.variable"></a>

```go
func Variable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanActionsSsmAutomationOutputReference <a name="SsmincidentsResponsePlanActionsSsmAutomationOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanActionsSsmAutomationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmincidentsResponsePlanActionsSsmAutomationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putDynamicParameters">PutDynamicParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDocumentName">ResetDocumentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDocumentVersion">ResetDocumentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDynamicParameters">ResetDynamicParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetTargetAccount">ResetTargetAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDynamicParameters` <a name="PutDynamicParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putDynamicParameters"></a>

```go
func PutDynamicParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putDynamicParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDocumentName` <a name="ResetDocumentName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDocumentName"></a>

```go
func ResetDocumentName()
```

##### `ResetDocumentVersion` <a name="ResetDocumentVersion" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDocumentVersion"></a>

```go
func ResetDocumentVersion()
```

##### `ResetDynamicParameters` <a name="ResetDynamicParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetDynamicParameters"></a>

```go
func ResetDynamicParameters()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetTargetAccount` <a name="ResetTargetAccount" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.resetTargetAccount"></a>

```go
func ResetTargetAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.dynamicParameters">DynamicParameters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList">SsmincidentsResponsePlanActionsSsmAutomationParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentNameInput">DocumentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentVersionInput">DocumentVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.dynamicParametersInput">DynamicParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.targetAccountInput">TargetAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentName">DocumentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentVersion">DocumentVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.targetAccount">TargetAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DynamicParameters`<sup>Required</sup> <a name="DynamicParameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.dynamicParameters"></a>

```go
func DynamicParameters() SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList">SsmincidentsResponsePlanActionsSsmAutomationDynamicParametersList</a>

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.parameters"></a>

```go
func Parameters() SsmincidentsResponsePlanActionsSsmAutomationParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList">SsmincidentsResponsePlanActionsSsmAutomationParametersList</a>

---

##### `DocumentNameInput`<sup>Optional</sup> <a name="DocumentNameInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentNameInput"></a>

```go
func DocumentNameInput() *string
```

- *Type:* *string

---

##### `DocumentVersionInput`<sup>Optional</sup> <a name="DocumentVersionInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentVersionInput"></a>

```go
func DocumentVersionInput() *string
```

- *Type:* *string

---

##### `DynamicParametersInput`<sup>Optional</sup> <a name="DynamicParametersInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.dynamicParametersInput"></a>

```go
func DynamicParametersInput() interface{}
```

- *Type:* interface{}

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TargetAccountInput`<sup>Optional</sup> <a name="TargetAccountInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.targetAccountInput"></a>

```go
func TargetAccountInput() *string
```

- *Type:* *string

---

##### `DocumentName`<sup>Required</sup> <a name="DocumentName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentName"></a>

```go
func DocumentName() *string
```

- *Type:* *string

---

##### `DocumentVersion`<sup>Required</sup> <a name="DocumentVersion" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.documentVersion"></a>

```go
func DocumentVersion() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `TargetAccount`<sup>Required</sup> <a name="TargetAccount" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.targetAccount"></a>

```go
func TargetAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanActionsSsmAutomationParametersList <a name="SsmincidentsResponsePlanActionsSsmAutomationParametersList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanActionsSsmAutomationParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmincidentsResponsePlanActionsSsmAutomationParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.get"></a>

```go
func Get(index *f64) SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference <a name="SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanActionsSsmAutomationParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanChatChannelOutputReference <a name="SsmincidentsResponsePlanChatChannelOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanChatChannelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmincidentsResponsePlanChatChannelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.resetChatbotSns">ResetChatbotSns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChatbotSns` <a name="ResetChatbotSns" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.resetChatbotSns"></a>

```go
func ResetChatbotSns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.chatbotSnsInput">ChatbotSnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.chatbotSns">ChatbotSns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChatbotSnsInput`<sup>Optional</sup> <a name="ChatbotSnsInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.chatbotSnsInput"></a>

```go
func ChatbotSnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ChatbotSns`<sup>Required</sup> <a name="ChatbotSns" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.chatbotSns"></a>

```go
func ChatbotSns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanChatChannelOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanIncidentTemplateIncidentTagsList <a name="SsmincidentsResponsePlanIncidentTemplateIncidentTagsList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanIncidentTemplateIncidentTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmincidentsResponsePlanIncidentTemplateIncidentTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.get"></a>

```go
func Get(index *f64) SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference <a name="SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList <a name="SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanIncidentTemplateNotificationTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.get"></a>

```go
func Get(index *f64) SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference <a name="SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resetSnsTopicArn">ResetSnsTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSnsTopicArn` <a name="ResetSnsTopicArn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.resetSnsTopicArn"></a>

```go
func ResetSnsTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.snsTopicArnInput">SnsTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.snsTopicArn">SnsTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SnsTopicArnInput`<sup>Optional</sup> <a name="SnsTopicArnInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.snsTopicArnInput"></a>

```go
func SnsTopicArnInput() *string
```

- *Type:* *string

---

##### `SnsTopicArn`<sup>Required</sup> <a name="SnsTopicArn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.snsTopicArn"></a>

```go
func SnsTopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanIncidentTemplateOutputReference <a name="SsmincidentsResponsePlanIncidentTemplateOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanIncidentTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmincidentsResponsePlanIncidentTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putIncidentTags">PutIncidentTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putNotificationTargets">PutNotificationTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetDedupeString">ResetDedupeString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetIncidentTags">ResetIncidentTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetNotificationTargets">ResetNotificationTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetSummary">ResetSummary</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIncidentTags` <a name="PutIncidentTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putIncidentTags"></a>

```go
func PutIncidentTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putIncidentTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNotificationTargets` <a name="PutNotificationTargets" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putNotificationTargets"></a>

```go
func PutNotificationTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.putNotificationTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDedupeString` <a name="ResetDedupeString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetDedupeString"></a>

```go
func ResetDedupeString()
```

##### `ResetIncidentTags` <a name="ResetIncidentTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetIncidentTags"></a>

```go
func ResetIncidentTags()
```

##### `ResetNotificationTargets` <a name="ResetNotificationTargets" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetNotificationTargets"></a>

```go
func ResetNotificationTargets()
```

##### `ResetSummary` <a name="ResetSummary" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.resetSummary"></a>

```go
func ResetSummary()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTags">IncidentTags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList">SsmincidentsResponsePlanIncidentTemplateIncidentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargets">NotificationTargets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList">SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeStringInput">DedupeStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impactInput">ImpactInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTagsInput">IncidentTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargetsInput">NotificationTargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summaryInput">SummaryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeString">DedupeString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impact">Impact</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncidentTags`<sup>Required</sup> <a name="IncidentTags" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTags"></a>

```go
func IncidentTags() SsmincidentsResponsePlanIncidentTemplateIncidentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateIncidentTagsList">SsmincidentsResponsePlanIncidentTemplateIncidentTagsList</a>

---

##### `NotificationTargets`<sup>Required</sup> <a name="NotificationTargets" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargets"></a>

```go
func NotificationTargets() SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList">SsmincidentsResponsePlanIncidentTemplateNotificationTargetsList</a>

---

##### `DedupeStringInput`<sup>Optional</sup> <a name="DedupeStringInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeStringInput"></a>

```go
func DedupeStringInput() *string
```

- *Type:* *string

---

##### `ImpactInput`<sup>Optional</sup> <a name="ImpactInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impactInput"></a>

```go
func ImpactInput() *f64
```

- *Type:* *f64

---

##### `IncidentTagsInput`<sup>Optional</sup> <a name="IncidentTagsInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.incidentTagsInput"></a>

```go
func IncidentTagsInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationTargetsInput`<sup>Optional</sup> <a name="NotificationTargetsInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.notificationTargetsInput"></a>

```go
func NotificationTargetsInput() interface{}
```

- *Type:* interface{}

---

##### `SummaryInput`<sup>Optional</sup> <a name="SummaryInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summaryInput"></a>

```go
func SummaryInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `DedupeString`<sup>Required</sup> <a name="DedupeString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.dedupeString"></a>

```go
func DedupeString() *string
```

- *Type:* *string

---

##### `Impact`<sup>Required</sup> <a name="Impact" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.impact"></a>

```go
func Impact() *f64
```

- *Type:* *f64

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIncidentTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanIntegrationsList <a name="SsmincidentsResponsePlanIntegrationsList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanIntegrationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmincidentsResponsePlanIntegrationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.get"></a>

```go
func Get(index *f64) SsmincidentsResponsePlanIntegrationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanIntegrationsOutputReference <a name="SsmincidentsResponsePlanIntegrationsOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanIntegrationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmincidentsResponsePlanIntegrationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.putPagerDutyConfiguration">PutPagerDutyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.resetPagerDutyConfiguration">ResetPagerDutyConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPagerDutyConfiguration` <a name="PutPagerDutyConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.putPagerDutyConfiguration"></a>

```go
func PutPagerDutyConfiguration(value SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.putPagerDutyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfiguration</a>

---

##### `ResetPagerDutyConfiguration` <a name="ResetPagerDutyConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.resetPagerDutyConfiguration"></a>

```go
func ResetPagerDutyConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.pagerDutyConfiguration">PagerDutyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.pagerDutyConfigurationInput">PagerDutyConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PagerDutyConfiguration`<sup>Required</sup> <a name="PagerDutyConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.pagerDutyConfiguration"></a>

```go
func PagerDutyConfiguration() SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference</a>

---

##### `PagerDutyConfigurationInput`<sup>Optional</sup> <a name="PagerDutyConfigurationInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.pagerDutyConfigurationInput"></a>

```go
func PagerDutyConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference <a name="SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.putPagerDutyIncidentConfiguration">PutPagerDutyIncidentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetPagerDutyIncidentConfiguration">ResetPagerDutyIncidentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPagerDutyIncidentConfiguration` <a name="PutPagerDutyIncidentConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.putPagerDutyIncidentConfiguration"></a>

```go
func PutPagerDutyIncidentConfiguration(value SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.putPagerDutyIncidentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfiguration</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPagerDutyIncidentConfiguration` <a name="ResetPagerDutyIncidentConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetPagerDutyIncidentConfiguration"></a>

```go
func ResetPagerDutyIncidentConfiguration()
```

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.resetSecretId"></a>

```go
func ResetSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.pagerDutyIncidentConfiguration">PagerDutyIncidentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.pagerDutyIncidentConfigurationInput">PagerDutyIncidentConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PagerDutyIncidentConfiguration`<sup>Required</sup> <a name="PagerDutyIncidentConfiguration" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.pagerDutyIncidentConfiguration"></a>

```go
func PagerDutyIncidentConfiguration() SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference">SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PagerDutyIncidentConfigurationInput`<sup>Optional</sup> <a name="PagerDutyIncidentConfigurationInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.pagerDutyIncidentConfigurationInput"></a>

```go
func PagerDutyIncidentConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference <a name="SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resetServiceId">ResetServiceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceId` <a name="ResetServiceId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.resetServiceId"></a>

```go
func ResetServiceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.serviceIdInput">ServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.serviceId">ServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.serviceIdInput"></a>

```go
func ServiceIdInput() *string
```

- *Type:* *string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.serviceId"></a>

```go
func ServiceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanIntegrationsPagerDutyConfigurationPagerDutyIncidentConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanTagsList <a name="SsmincidentsResponsePlanTagsList" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmincidentsResponsePlanTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.get"></a>

```go
func Get(index *f64) SsmincidentsResponsePlanTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmincidentsResponsePlanTagsOutputReference <a name="SsmincidentsResponsePlanTagsOutputReference" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmincidentsresponseplan"

ssmincidentsresponseplan.NewSsmincidentsResponsePlanTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmincidentsResponsePlanTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmincidentsResponsePlan.SsmincidentsResponsePlanTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



