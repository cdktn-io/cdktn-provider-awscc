# `wellarchitectedAgentProfile` Submodule <a name="`wellarchitectedAgentProfile` Submodule" id="@cdktn/provider-awscc.wellarchitectedAgentProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WellarchitectedAgentProfile <a name="WellarchitectedAgentProfile" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile awscc_wellarchitected_agent_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedagentprofile"

wellarchitectedagentprofile.NewWellarchitectedAgentProfile(scope Construct, id *string, config WellarchitectedAgentProfileConfig) WellarchitectedAgentProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig">WellarchitectedAgentProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig">WellarchitectedAgentProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.putAggregationConfiguration">PutAggregationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetBusinessOverview">ResetBusinessOverview</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAggregationConfiguration` <a name="PutAggregationConfiguration" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.putAggregationConfiguration"></a>

```go
func PutAggregationConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.putAggregationConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBusinessOverview` <a name="ResetBusinessOverview" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetBusinessOverview"></a>

```go
func ResetBusinessOverview()
```

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WellarchitectedAgentProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedagentprofile"

wellarchitectedagentprofile.WellarchitectedAgentProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedagentprofile"

wellarchitectedagentprofile.WellarchitectedAgentProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedagentprofile"

wellarchitectedagentprofile.WellarchitectedAgentProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedagentprofile"

wellarchitectedagentprofile.WellarchitectedAgentProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WellarchitectedAgentProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WellarchitectedAgentProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WellarchitectedAgentProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WellarchitectedAgentProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.aggregationConfiguration">AggregationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList">WellarchitectedAgentProfileAggregationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.lastModifiedAt">LastModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.lastModifiedBy">LastModifiedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList">WellarchitectedAgentProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.aggregationConfigurationInput">AggregationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.businessOverviewInput">BusinessOverviewInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.pillarsInput">PillarsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.businessOverview">BusinessOverview</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.pillars">Pillars</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AggregationConfiguration`<sup>Required</sup> <a name="AggregationConfiguration" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.aggregationConfiguration"></a>

```go
func AggregationConfiguration() WellarchitectedAgentProfileAggregationConfigurationList
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList">WellarchitectedAgentProfileAggregationConfigurationList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifiedAt`<sup>Required</sup> <a name="LastModifiedAt" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.lastModifiedAt"></a>

```go
func LastModifiedAt() *string
```

- *Type:* *string

---

##### `LastModifiedBy`<sup>Required</sup> <a name="LastModifiedBy" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.lastModifiedBy"></a>

```go
func LastModifiedBy() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.tags"></a>

```go
func Tags() WellarchitectedAgentProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList">WellarchitectedAgentProfileTagsList</a>

---

##### `AggregationConfigurationInput`<sup>Optional</sup> <a name="AggregationConfigurationInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.aggregationConfigurationInput"></a>

```go
func AggregationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `BusinessOverviewInput`<sup>Optional</sup> <a name="BusinessOverviewInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.businessOverviewInput"></a>

```go
func BusinessOverviewInput() *string
```

- *Type:* *string

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.executionRoleArnInput"></a>

```go
func ExecutionRoleArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PillarsInput`<sup>Optional</sup> <a name="PillarsInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.pillarsInput"></a>

```go
func PillarsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `BusinessOverview`<sup>Required</sup> <a name="BusinessOverview" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.businessOverview"></a>

```go
func BusinessOverview() *string
```

- *Type:* *string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.executionRoleArn"></a>

```go
func ExecutionRoleArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Pillars`<sup>Required</sup> <a name="Pillars" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.pillars"></a>

```go
func Pillars() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WellarchitectedAgentProfileAggregationConfiguration <a name="WellarchitectedAgentProfileAggregationConfiguration" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedagentprofile"

&wellarchitectedagentprofile.WellarchitectedAgentProfileAggregationConfiguration {
	AccessRoleArn: *string,
	AccountId: *string,
	Regions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration.property.accessRoleArn">AccessRoleArn</a></code> | <code>*string</code> | The ARN of the IAM role used to access resources in this account. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration.property.accountId">AccountId</a></code> | <code>*string</code> | The target AWS account ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration.property.regions">Regions</a></code> | <code>*[]*string</code> | The target regions in the account. |

---

##### `AccessRoleArn`<sup>Required</sup> <a name="AccessRoleArn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration.property.accessRoleArn"></a>

```go
AccessRoleArn *string
```

- *Type:* *string

The ARN of the IAM role used to access resources in this account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#access_role_arn WellarchitectedAgentProfile#access_role_arn}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The target AWS account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#account_id WellarchitectedAgentProfile#account_id}

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfiguration.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

The target regions in the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#regions WellarchitectedAgentProfile#regions}

---

### WellarchitectedAgentProfileConfig <a name="WellarchitectedAgentProfileConfig" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedagentprofile"

&wellarchitectedagentprofile.WellarchitectedAgentProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AggregationConfiguration: interface{},
	ExecutionRoleArn: *string,
	Name: *string,
	Pillars: *[]*string,
	BusinessOverview: *string,
	DeletionProtection: interface{},
	Description: *string,
	DisplayName: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.aggregationConfiguration">AggregationConfiguration</a></code> | <code>interface{}</code> | The aggregation configuration entries (account, regions, access role) associated with this profile. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>*string</code> | The ARN of the IAM role assumed to execute recommendation actions. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.name">Name</a></code> | <code>*string</code> | The name of the profile. Unique within the account and used as the last component of the ARN. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.pillars">Pillars</a></code> | <code>*[]*string</code> | The list of Well-Architected pillars to focus on. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.businessOverview">BusinessOverview</a></code> | <code>*string</code> | A business overview for the profile used to improve recommendation quality. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Whether deletion protection is enabled for the profile. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.description">Description</a></code> | <code>*string</code> | A description of the profile. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The human-readable display name of the profile. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Key-value pairs to associate with the Agent Profile. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AggregationConfiguration`<sup>Required</sup> <a name="AggregationConfiguration" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.aggregationConfiguration"></a>

```go
AggregationConfiguration interface{}
```

- *Type:* interface{}

The aggregation configuration entries (account, regions, access role) associated with this profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#aggregation_configuration WellarchitectedAgentProfile#aggregation_configuration}

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.executionRoleArn"></a>

```go
ExecutionRoleArn *string
```

- *Type:* *string

The ARN of the IAM role assumed to execute recommendation actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#execution_role_arn WellarchitectedAgentProfile#execution_role_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the profile. Unique within the account and used as the last component of the ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#name WellarchitectedAgentProfile#name}

---

##### `Pillars`<sup>Required</sup> <a name="Pillars" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.pillars"></a>

```go
Pillars *[]*string
```

- *Type:* *[]*string

The list of Well-Architected pillars to focus on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#pillars WellarchitectedAgentProfile#pillars}

---

##### `BusinessOverview`<sup>Optional</sup> <a name="BusinessOverview" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.businessOverview"></a>

```go
BusinessOverview *string
```

- *Type:* *string

A business overview for the profile used to improve recommendation quality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#business_overview WellarchitectedAgentProfile#business_overview}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Whether deletion protection is enabled for the profile.

When enabled, the profile cannot be deleted until deletion protection is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#deletion_protection WellarchitectedAgentProfile#deletion_protection}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#description WellarchitectedAgentProfile#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human-readable display name of the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#display_name WellarchitectedAgentProfile#display_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Key-value pairs to associate with the Agent Profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#tags WellarchitectedAgentProfile#tags}

---

### WellarchitectedAgentProfileTags <a name="WellarchitectedAgentProfileTags" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedagentprofile"

&wellarchitectedagentprofile.WellarchitectedAgentProfileTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags.property.key">Key</a></code> | <code>*string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags.property.value">Value</a></code> | <code>*string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#key WellarchitectedAgentProfile#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_profile#value WellarchitectedAgentProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### WellarchitectedAgentProfileAggregationConfigurationList <a name="WellarchitectedAgentProfileAggregationConfigurationList" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedagentprofile"

wellarchitectedagentprofile.NewWellarchitectedAgentProfileAggregationConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WellarchitectedAgentProfileAggregationConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.get"></a>

```go
func Get(index *f64) WellarchitectedAgentProfileAggregationConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WellarchitectedAgentProfileAggregationConfigurationOutputReference <a name="WellarchitectedAgentProfileAggregationConfigurationOutputReference" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedagentprofile"

wellarchitectedagentprofile.NewWellarchitectedAgentProfileAggregationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WellarchitectedAgentProfileAggregationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accessRoleArnInput">AccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accessRoleArn">AccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessRoleArnInput`<sup>Optional</sup> <a name="AccessRoleArnInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accessRoleArnInput"></a>

```go
func AccessRoleArnInput() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessRoleArn`<sup>Required</sup> <a name="AccessRoleArn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accessRoleArn"></a>

```go
func AccessRoleArn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileAggregationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WellarchitectedAgentProfileTagsList <a name="WellarchitectedAgentProfileTagsList" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedagentprofile"

wellarchitectedagentprofile.NewWellarchitectedAgentProfileTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WellarchitectedAgentProfileTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.get"></a>

```go
func Get(index *f64) WellarchitectedAgentProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WellarchitectedAgentProfileTagsOutputReference <a name="WellarchitectedAgentProfileTagsOutputReference" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedagentprofile"

wellarchitectedagentprofile.NewWellarchitectedAgentProfileTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WellarchitectedAgentProfileTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wellarchitectedAgentProfile.WellarchitectedAgentProfileTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



