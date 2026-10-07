# `sagemakerWorkteam` Submodule <a name="`sagemakerWorkteam` Submodule" id="@cdktn/provider-awscc.sagemakerWorkteam"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerWorkteam <a name="SagemakerWorkteam" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam awscc_sagemaker_workteam}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerworkteam"

sagemakerworkteam.NewSagemakerWorkteam(scope Construct, id *string, config SagemakerWorkteamConfig) SagemakerWorkteam
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig">SagemakerWorkteamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig">SagemakerWorkteamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putMemberDefinitions">PutMemberDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putNotificationConfiguration">PutNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetNotificationConfiguration">ResetNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetWorkforceName">ResetWorkforceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetWorkteamName">ResetWorkteamName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMemberDefinitions` <a name="PutMemberDefinitions" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putMemberDefinitions"></a>

```go
func PutMemberDefinitions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putMemberDefinitions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNotificationConfiguration` <a name="PutNotificationConfiguration" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putNotificationConfiguration"></a>

```go
func PutNotificationConfiguration(value SagemakerWorkteamNotificationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putNotificationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetNotificationConfiguration` <a name="ResetNotificationConfiguration" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetNotificationConfiguration"></a>

```go
func ResetNotificationConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetTags"></a>

```go
func ResetTags()
```

##### `ResetWorkforceName` <a name="ResetWorkforceName" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetWorkforceName"></a>

```go
func ResetWorkforceName()
```

##### `ResetWorkteamName` <a name="ResetWorkteamName" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.resetWorkteamName"></a>

```go
func ResetWorkteamName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerWorkteam resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerworkteam"

sagemakerworkteam.SagemakerWorkteam_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerworkteam"

sagemakerworkteam.SagemakerWorkteam_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerworkteam"

sagemakerworkteam.SagemakerWorkteam_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerworkteam"

sagemakerworkteam.SagemakerWorkteam_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SagemakerWorkteam resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerWorkteam to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerWorkteam that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerWorkteam to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinitions">MemberDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList">SagemakerWorkteamMemberDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfiguration">NotificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference">SagemakerWorkteamNotificationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList">SagemakerWorkteamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workteamArn">WorkteamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinitionsInput">MemberDefinitionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfigurationInput">NotificationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workforceNameInput">WorkforceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workteamNameInput">WorkteamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workforceName">WorkforceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workteamName">WorkteamName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MemberDefinitions`<sup>Required</sup> <a name="MemberDefinitions" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinitions"></a>

```go
func MemberDefinitions() SagemakerWorkteamMemberDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList">SagemakerWorkteamMemberDefinitionsList</a>

---

##### `NotificationConfiguration`<sup>Required</sup> <a name="NotificationConfiguration" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfiguration"></a>

```go
func NotificationConfiguration() SagemakerWorkteamNotificationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference">SagemakerWorkteamNotificationConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.tags"></a>

```go
func Tags() SagemakerWorkteamTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList">SagemakerWorkteamTagsList</a>

---

##### `WorkteamArn`<sup>Required</sup> <a name="WorkteamArn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workteamArn"></a>

```go
func WorkteamArn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `MemberDefinitionsInput`<sup>Optional</sup> <a name="MemberDefinitionsInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinitionsInput"></a>

```go
func MemberDefinitionsInput() interface{}
```

- *Type:* interface{}

---

##### `NotificationConfigurationInput`<sup>Optional</sup> <a name="NotificationConfigurationInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfigurationInput"></a>

```go
func NotificationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkforceNameInput`<sup>Optional</sup> <a name="WorkforceNameInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workforceNameInput"></a>

```go
func WorkforceNameInput() *string
```

- *Type:* *string

---

##### `WorkteamNameInput`<sup>Optional</sup> <a name="WorkteamNameInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workteamNameInput"></a>

```go
func WorkteamNameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `WorkforceName`<sup>Required</sup> <a name="WorkforceName" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workforceName"></a>

```go
func WorkforceName() *string
```

- *Type:* *string

---

##### `WorkteamName`<sup>Required</sup> <a name="WorkteamName" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.workteamName"></a>

```go
func WorkteamName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteam.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerWorkteamConfig <a name="SagemakerWorkteamConfig" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerworkteam"

&sagemakerworkteam.SagemakerWorkteamConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	MemberDefinitions: interface{},
	NotificationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration,
	Tags: interface{},
	WorkforceName: *string,
	WorkteamName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.description">Description</a></code> | <code>*string</code> | A description of the work team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.memberDefinitions">MemberDefinitions</a></code> | <code>interface{}</code> | A list of MemberDefinition objects that contains objects that identify the workers that make up the work team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.notificationConfiguration">NotificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a></code> | Configures SNS notifications of available or expiring work items for work teams. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.workforceName">WorkforceName</a></code> | <code>*string</code> | The name of the Workforce. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.workteamName">WorkteamName</a></code> | <code>*string</code> | The name of the work team. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the work team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#description SagemakerWorkteam#description}

---

##### `MemberDefinitions`<sup>Required</sup> <a name="MemberDefinitions" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.memberDefinitions"></a>

```go
MemberDefinitions interface{}
```

- *Type:* interface{}

A list of MemberDefinition objects that contains objects that identify the workers that make up the work team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#member_definitions SagemakerWorkteam#member_definitions}

---

##### `NotificationConfiguration`<sup>Optional</sup> <a name="NotificationConfiguration" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.notificationConfiguration"></a>

```go
NotificationConfiguration SagemakerWorkteamNotificationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a>

Configures SNS notifications of available or expiring work items for work teams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#notification_configuration SagemakerWorkteam#notification_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#tags SagemakerWorkteam#tags}

---

##### `WorkforceName`<sup>Optional</sup> <a name="WorkforceName" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.workforceName"></a>

```go
WorkforceName *string
```

- *Type:* *string

The name of the Workforce.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#workforce_name SagemakerWorkteam#workforce_name}

---

##### `WorkteamName`<sup>Optional</sup> <a name="WorkteamName" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamConfig.property.workteamName"></a>

```go
WorkteamName *string
```

- *Type:* *string

The name of the work team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#workteam_name SagemakerWorkteam#workteam_name}

---

### SagemakerWorkteamMemberDefinitions <a name="SagemakerWorkteamMemberDefinitions" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerworkteam"

&sagemakerworkteam.SagemakerWorkteamMemberDefinitions {
	CognitoMemberDefinition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition,
	OidcMemberDefinition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions.property.cognitoMemberDefinition">CognitoMemberDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition</a></code> | The Amazon Cognito user group that is part of the work team. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions.property.oidcMemberDefinition">OidcMemberDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition">SagemakerWorkteamMemberDefinitionsOidcMemberDefinition</a></code> | A list user groups that exist in your OIDC Identity Provider (IdP). |

---

##### `CognitoMemberDefinition`<sup>Optional</sup> <a name="CognitoMemberDefinition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions.property.cognitoMemberDefinition"></a>

```go
CognitoMemberDefinition SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition</a>

The Amazon Cognito user group that is part of the work team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#cognito_member_definition SagemakerWorkteam#cognito_member_definition}

---

##### `OidcMemberDefinition`<sup>Optional</sup> <a name="OidcMemberDefinition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitions.property.oidcMemberDefinition"></a>

```go
OidcMemberDefinition SagemakerWorkteamMemberDefinitionsOidcMemberDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition">SagemakerWorkteamMemberDefinitionsOidcMemberDefinition</a>

A list user groups that exist in your OIDC Identity Provider (IdP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#oidc_member_definition SagemakerWorkteam#oidc_member_definition}

---

### SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition <a name="SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerworkteam"

&sagemakerworkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition {
	CognitoClientId: *string,
	CognitoUserGroup: *string,
	CognitoUserPool: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition.property.cognitoClientId">CognitoClientId</a></code> | <code>*string</code> | An identifier for an application client. You must create the app client ID using Amazon Cognito. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition.property.cognitoUserGroup">CognitoUserGroup</a></code> | <code>*string</code> | An identifier for a user group. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition.property.cognitoUserPool">CognitoUserPool</a></code> | <code>*string</code> | An identifier for a user pool. |

---

##### `CognitoClientId`<sup>Optional</sup> <a name="CognitoClientId" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition.property.cognitoClientId"></a>

```go
CognitoClientId *string
```

- *Type:* *string

An identifier for an application client. You must create the app client ID using Amazon Cognito.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#cognito_client_id SagemakerWorkteam#cognito_client_id}

---

##### `CognitoUserGroup`<sup>Optional</sup> <a name="CognitoUserGroup" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition.property.cognitoUserGroup"></a>

```go
CognitoUserGroup *string
```

- *Type:* *string

An identifier for a user group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#cognito_user_group SagemakerWorkteam#cognito_user_group}

---

##### `CognitoUserPool`<sup>Optional</sup> <a name="CognitoUserPool" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition.property.cognitoUserPool"></a>

```go
CognitoUserPool *string
```

- *Type:* *string

An identifier for a user pool.

The user pool must be in the same region as the service that you are calling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#cognito_user_pool SagemakerWorkteam#cognito_user_pool}

---

### SagemakerWorkteamMemberDefinitionsOidcMemberDefinition <a name="SagemakerWorkteamMemberDefinitionsOidcMemberDefinition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerworkteam"

&sagemakerworkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition {
	OidcGroups: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition.property.oidcGroups">OidcGroups</a></code> | <code>*[]*string</code> | A list of OIDC group names whose members will be part of this workteam. |

---

##### `OidcGroups`<sup>Optional</sup> <a name="OidcGroups" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition.property.oidcGroups"></a>

```go
OidcGroups *[]*string
```

- *Type:* *[]*string

A list of OIDC group names whose members will be part of this workteam.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#oidc_groups SagemakerWorkteam#oidc_groups}

---

### SagemakerWorkteamNotificationConfiguration <a name="SagemakerWorkteamNotificationConfiguration" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerworkteam"

&sagemakerworkteam.SagemakerWorkteamNotificationConfiguration {
	NotificationTopicArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration.property.notificationTopicArn">NotificationTopicArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications should be published. |

---

##### `NotificationTopicArn`<sup>Optional</sup> <a name="NotificationTopicArn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration.property.notificationTopicArn"></a>

```go
NotificationTopicArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications should be published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#notification_topic_arn SagemakerWorkteam#notification_topic_arn}

---

### SagemakerWorkteamTags <a name="SagemakerWorkteamTags" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerworkteam"

&sagemakerworkteam.SagemakerWorkteamTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags.property.key">Key</a></code> | <code>*string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags.property.value">Value</a></code> | <code>*string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#key SagemakerWorkteam#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/sagemaker_workteam#value SagemakerWorkteam#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference <a name="SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerworkteam"

sagemakerworkteam.NewSagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resetCognitoClientId">ResetCognitoClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resetCognitoUserGroup">ResetCognitoUserGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resetCognitoUserPool">ResetCognitoUserPool</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCognitoClientId` <a name="ResetCognitoClientId" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resetCognitoClientId"></a>

```go
func ResetCognitoClientId()
```

##### `ResetCognitoUserGroup` <a name="ResetCognitoUserGroup" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resetCognitoUserGroup"></a>

```go
func ResetCognitoUserGroup()
```

##### `ResetCognitoUserPool` <a name="ResetCognitoUserPool" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.resetCognitoUserPool"></a>

```go
func ResetCognitoUserPool()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoClientIdInput">CognitoClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserGroupInput">CognitoUserGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserPoolInput">CognitoUserPoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoClientId">CognitoClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserGroup">CognitoUserGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserPool">CognitoUserPool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CognitoClientIdInput`<sup>Optional</sup> <a name="CognitoClientIdInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoClientIdInput"></a>

```go
func CognitoClientIdInput() *string
```

- *Type:* *string

---

##### `CognitoUserGroupInput`<sup>Optional</sup> <a name="CognitoUserGroupInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserGroupInput"></a>

```go
func CognitoUserGroupInput() *string
```

- *Type:* *string

---

##### `CognitoUserPoolInput`<sup>Optional</sup> <a name="CognitoUserPoolInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserPoolInput"></a>

```go
func CognitoUserPoolInput() *string
```

- *Type:* *string

---

##### `CognitoClientId`<sup>Required</sup> <a name="CognitoClientId" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoClientId"></a>

```go
func CognitoClientId() *string
```

- *Type:* *string

---

##### `CognitoUserGroup`<sup>Required</sup> <a name="CognitoUserGroup" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserGroup"></a>

```go
func CognitoUserGroup() *string
```

- *Type:* *string

---

##### `CognitoUserPool`<sup>Required</sup> <a name="CognitoUserPool" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.cognitoUserPool"></a>

```go
func CognitoUserPool() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerWorkteamMemberDefinitionsList <a name="SagemakerWorkteamMemberDefinitionsList" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerworkteam"

sagemakerworkteam.NewSagemakerWorkteamMemberDefinitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerWorkteamMemberDefinitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.get"></a>

```go
func Get(index *f64) SagemakerWorkteamMemberDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference <a name="SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerworkteam"

sagemakerworkteam.NewSagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.resetOidcGroups">ResetOidcGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOidcGroups` <a name="ResetOidcGroups" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.resetOidcGroups"></a>

```go
func ResetOidcGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.oidcGroupsInput">OidcGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.oidcGroups">OidcGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OidcGroupsInput`<sup>Optional</sup> <a name="OidcGroupsInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.oidcGroupsInput"></a>

```go
func OidcGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OidcGroups`<sup>Required</sup> <a name="OidcGroups" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.oidcGroups"></a>

```go
func OidcGroups() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerWorkteamMemberDefinitionsOutputReference <a name="SagemakerWorkteamMemberDefinitionsOutputReference" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerworkteam"

sagemakerworkteam.NewSagemakerWorkteamMemberDefinitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerWorkteamMemberDefinitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.putCognitoMemberDefinition">PutCognitoMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.putOidcMemberDefinition">PutOidcMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.resetCognitoMemberDefinition">ResetCognitoMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.resetOidcMemberDefinition">ResetOidcMemberDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCognitoMemberDefinition` <a name="PutCognitoMemberDefinition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.putCognitoMemberDefinition"></a>

```go
func PutCognitoMemberDefinition(value SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.putCognitoMemberDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionsCognitoMemberDefinition</a>

---

##### `PutOidcMemberDefinition` <a name="PutOidcMemberDefinition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.putOidcMemberDefinition"></a>

```go
func PutOidcMemberDefinition(value SagemakerWorkteamMemberDefinitionsOidcMemberDefinition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.putOidcMemberDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinition">SagemakerWorkteamMemberDefinitionsOidcMemberDefinition</a>

---

##### `ResetCognitoMemberDefinition` <a name="ResetCognitoMemberDefinition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.resetCognitoMemberDefinition"></a>

```go
func ResetCognitoMemberDefinition()
```

##### `ResetOidcMemberDefinition` <a name="ResetOidcMemberDefinition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.resetOidcMemberDefinition"></a>

```go
func ResetOidcMemberDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.cognitoMemberDefinition">CognitoMemberDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.oidcMemberDefinition">OidcMemberDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.cognitoMemberDefinitionInput">CognitoMemberDefinitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.oidcMemberDefinitionInput">OidcMemberDefinitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CognitoMemberDefinition`<sup>Required</sup> <a name="CognitoMemberDefinition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.cognitoMemberDefinition"></a>

```go
func CognitoMemberDefinition() SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionsCognitoMemberDefinitionOutputReference</a>

---

##### `OidcMemberDefinition`<sup>Required</sup> <a name="OidcMemberDefinition" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.oidcMemberDefinition"></a>

```go
func OidcMemberDefinition() SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionsOidcMemberDefinitionOutputReference</a>

---

##### `CognitoMemberDefinitionInput`<sup>Optional</sup> <a name="CognitoMemberDefinitionInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.cognitoMemberDefinitionInput"></a>

```go
func CognitoMemberDefinitionInput() interface{}
```

- *Type:* interface{}

---

##### `OidcMemberDefinitionInput`<sup>Optional</sup> <a name="OidcMemberDefinitionInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.oidcMemberDefinitionInput"></a>

```go
func OidcMemberDefinitionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerWorkteamNotificationConfigurationOutputReference <a name="SagemakerWorkteamNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerworkteam"

sagemakerworkteam.NewSagemakerWorkteamNotificationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerWorkteamNotificationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resetNotificationTopicArn">ResetNotificationTopicArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNotificationTopicArn` <a name="ResetNotificationTopicArn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resetNotificationTopicArn"></a>

```go
func ResetNotificationTopicArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArnInput">NotificationTopicArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArn">NotificationTopicArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotificationTopicArnInput`<sup>Optional</sup> <a name="NotificationTopicArnInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArnInput"></a>

```go
func NotificationTopicArnInput() *string
```

- *Type:* *string

---

##### `NotificationTopicArn`<sup>Required</sup> <a name="NotificationTopicArn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArn"></a>

```go
func NotificationTopicArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerWorkteamTagsList <a name="SagemakerWorkteamTagsList" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerworkteam"

sagemakerworkteam.NewSagemakerWorkteamTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerWorkteamTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.get"></a>

```go
func Get(index *f64) SagemakerWorkteamTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerWorkteamTagsOutputReference <a name="SagemakerWorkteamTagsOutputReference" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerworkteam"

sagemakerworkteam.NewSagemakerWorkteamTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerWorkteamTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerWorkteam.SagemakerWorkteamTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



