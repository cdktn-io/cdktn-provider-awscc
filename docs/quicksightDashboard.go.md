# `quicksightDashboard` Submodule <a name="`quicksightDashboard` Submodule" id="@cdktn/provider-awscc.quicksightDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightDashboard <a name="QuicksightDashboard" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard awscc_quicksight_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboard(scope Construct, id *string, config QuicksightDashboardConfig) QuicksightDashboard
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig">QuicksightDashboardConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig">QuicksightDashboardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions">PutDashboardPublishOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putPermissions">PutPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putSourceEntity">PutSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetDashboardPublishOptions">ResetDashboardPublishOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetThemeArn">ResetThemeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetVersionDescription">ResetVersionDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDashboardPublishOptions` <a name="PutDashboardPublishOptions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions"></a>

```go
func PutDashboardPublishOptions(value QuicksightDashboardDashboardPublishOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putDashboardPublishOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a>

---

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putParameters"></a>

```go
func PutParameters(value QuicksightDashboardParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a>

---

##### `PutPermissions` <a name="PutPermissions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putPermissions"></a>

```go
func PutPermissions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putPermissions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSourceEntity` <a name="PutSourceEntity" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putSourceEntity"></a>

```go
func PutSourceEntity(value QuicksightDashboardSourceEntity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putSourceEntity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDashboardPublishOptions` <a name="ResetDashboardPublishOptions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetDashboardPublishOptions"></a>

```go
func ResetDashboardPublishOptions()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetName"></a>

```go
func ResetName()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetTags"></a>

```go
func ResetTags()
```

##### `ResetThemeArn` <a name="ResetThemeArn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetThemeArn"></a>

```go
func ResetThemeArn()
```

##### `ResetVersionDescription` <a name="ResetVersionDescription" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.resetVersionDescription"></a>

```go
func ResetVersionDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightDashboard resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.QuicksightDashboard_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.QuicksightDashboard_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.QuicksightDashboard_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.QuicksightDashboard_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a QuicksightDashboard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the QuicksightDashboard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing QuicksightDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.dashboardPublishOptions">DashboardPublishOptions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference">QuicksightDashboardDashboardPublishOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.lastPublishedTime">LastPublishedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference">QuicksightDashboardParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.permissions">Permissions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList">QuicksightDashboardPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.sourceEntity">SourceEntity</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference">QuicksightDashboardSourceEntityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList">QuicksightDashboardTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.version">Version</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference">QuicksightDashboardVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.dashboardIdInput">DashboardIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.dashboardPublishOptionsInput">DashboardPublishOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.permissionsInput">PermissionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.sourceEntityInput">SourceEntityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.themeArnInput">ThemeArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.versionDescriptionInput">VersionDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.dashboardId">DashboardId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.themeArn">ThemeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.versionDescription">VersionDescription</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `DashboardPublishOptions`<sup>Required</sup> <a name="DashboardPublishOptions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.dashboardPublishOptions"></a>

```go
func DashboardPublishOptions() QuicksightDashboardDashboardPublishOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference">QuicksightDashboardDashboardPublishOptionsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastPublishedTime`<sup>Required</sup> <a name="LastPublishedTime" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.lastPublishedTime"></a>

```go
func LastPublishedTime() *string
```

- *Type:* *string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.parameters"></a>

```go
func Parameters() QuicksightDashboardParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference">QuicksightDashboardParametersOutputReference</a>

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.permissions"></a>

```go
func Permissions() QuicksightDashboardPermissionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList">QuicksightDashboardPermissionsList</a>

---

##### `SourceEntity`<sup>Required</sup> <a name="SourceEntity" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.sourceEntity"></a>

```go
func SourceEntity() QuicksightDashboardSourceEntityOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference">QuicksightDashboardSourceEntityOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.tags"></a>

```go
func Tags() QuicksightDashboardTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList">QuicksightDashboardTagsList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.version"></a>

```go
func Version() QuicksightDashboardVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference">QuicksightDashboardVersionOutputReference</a>

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `DashboardIdInput`<sup>Optional</sup> <a name="DashboardIdInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.dashboardIdInput"></a>

```go
func DashboardIdInput() *string
```

- *Type:* *string

---

##### `DashboardPublishOptionsInput`<sup>Optional</sup> <a name="DashboardPublishOptionsInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.dashboardPublishOptionsInput"></a>

```go
func DashboardPublishOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.permissionsInput"></a>

```go
func PermissionsInput() interface{}
```

- *Type:* interface{}

---

##### `SourceEntityInput`<sup>Optional</sup> <a name="SourceEntityInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.sourceEntityInput"></a>

```go
func SourceEntityInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ThemeArnInput`<sup>Optional</sup> <a name="ThemeArnInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.themeArnInput"></a>

```go
func ThemeArnInput() *string
```

- *Type:* *string

---

##### `VersionDescriptionInput`<sup>Optional</sup> <a name="VersionDescriptionInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.versionDescriptionInput"></a>

```go
func VersionDescriptionInput() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.dashboardId"></a>

```go
func DashboardId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ThemeArn`<sup>Required</sup> <a name="ThemeArn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.themeArn"></a>

```go
func ThemeArn() *string
```

- *Type:* *string

---

##### `VersionDescription`<sup>Required</sup> <a name="VersionDescription" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.versionDescription"></a>

```go
func VersionDescription() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboard.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightDashboardConfig <a name="QuicksightDashboardConfig" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AwsAccountId: *string,
	DashboardId: *string,
	SourceEntity: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightDashboard.QuicksightDashboardSourceEntity,
	DashboardPublishOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions,
	Name: *string,
	Parameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightDashboard.QuicksightDashboardParameters,
	Permissions: interface{},
	Tags: interface{},
	ThemeArn: *string,
	VersionDescription: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#aws_account_id QuicksightDashboard#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.dashboardId">DashboardId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#dashboard_id QuicksightDashboard#dashboard_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.sourceEntity">SourceEntity</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a></code> | <p>Dashboard source entity.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.dashboardPublishOptions">DashboardPublishOptions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a></code> | <p>Dashboard publish options.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.name">Name</a></code> | <code>*string</code> | <p>The display name of the dashboard.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a></code> | <p>A list of QuickSight parameters and the list's override values.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.permissions">Permissions</a></code> | <code>interface{}</code> | <p>A structure that contains the permissions of the dashboard. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.tags">Tags</a></code> | <code>interface{}</code> | <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the             dashboard.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.themeArn">ThemeArn</a></code> | <code>*string</code> | <p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.versionDescription">VersionDescription</a></code> | <code>*string</code> | <p>A description for the first version of the dashboard being created.</p>. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#aws_account_id QuicksightDashboard#aws_account_id}.

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.dashboardId"></a>

```go
DashboardId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#dashboard_id QuicksightDashboard#dashboard_id}.

---

##### `SourceEntity`<sup>Required</sup> <a name="SourceEntity" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.sourceEntity"></a>

```go
SourceEntity QuicksightDashboardSourceEntity
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntity">QuicksightDashboardSourceEntity</a>

<p>Dashboard source entity.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#source_entity QuicksightDashboard#source_entity}

---

##### `DashboardPublishOptions`<sup>Optional</sup> <a name="DashboardPublishOptions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.dashboardPublishOptions"></a>

```go
DashboardPublishOptions QuicksightDashboardDashboardPublishOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions">QuicksightDashboardDashboardPublishOptions</a>

<p>Dashboard publish options.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#dashboard_publish_options QuicksightDashboard#dashboard_publish_options}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

<p>The display name of the dashboard.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.parameters"></a>

```go
Parameters QuicksightDashboardParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters">QuicksightDashboardParameters</a>

<p>A list of QuickSight parameters and the list's override values.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#parameters QuicksightDashboard#parameters}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.permissions"></a>

```go
Permissions interface{}
```

- *Type:* interface{}

<p>A structure that contains the permissions of the dashboard.

You can use this structure
for granting permissions by providing a list of IAM action information for each
principal ARN. </p>

```
    <p>To specify no permissions, omit the permissions list.</p>
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#permissions QuicksightDashboard#permissions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

<p>Contains a map of the key-value pairs for the resource tag or tags assigned to the             dashboard.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#tags QuicksightDashboard#tags}

---

##### `ThemeArn`<sup>Optional</sup> <a name="ThemeArn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.themeArn"></a>

```go
ThemeArn *string
```

- *Type:* *string

<p>The Amazon Resource Name (ARN) of the theme that is being used for this dashboard.

If
you add a value for this field, it overrides the value that is used in the source
entity. The theme ARN must exist in the same AWS account where you create the
dashboard.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#theme_arn QuicksightDashboard#theme_arn}

---

##### `VersionDescription`<sup>Optional</sup> <a name="VersionDescription" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardConfig.property.versionDescription"></a>

```go
VersionDescription *string
```

- *Type:* *string

<p>A description for the first version of the dashboard being created.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#version_description QuicksightDashboard#version_description}

---

### QuicksightDashboardDashboardPublishOptions <a name="QuicksightDashboardDashboardPublishOptions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardDashboardPublishOptions {
	AdHocFilteringOption: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption,
	ExportToCsvOption: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption,
	SheetControlsOption: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.adHocFilteringOption">AdHocFilteringOption</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a></code> | <p>Ad hoc (one-time) filtering option.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.exportToCsvOption">ExportToCsvOption</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a></code> | <p>Export to .csv option.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.sheetControlsOption">SheetControlsOption</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a></code> | <p>Sheet controls option.</p>. |

---

##### `AdHocFilteringOption`<sup>Optional</sup> <a name="AdHocFilteringOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.adHocFilteringOption"></a>

```go
AdHocFilteringOption QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a>

<p>Ad hoc (one-time) filtering option.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#ad_hoc_filtering_option QuicksightDashboard#ad_hoc_filtering_option}

---

##### `ExportToCsvOption`<sup>Optional</sup> <a name="ExportToCsvOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.exportToCsvOption"></a>

```go
ExportToCsvOption QuicksightDashboardDashboardPublishOptionsExportToCsvOption
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a>

<p>Export to .csv option.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#export_to_csv_option QuicksightDashboard#export_to_csv_option}

---

##### `SheetControlsOption`<sup>Optional</sup> <a name="SheetControlsOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptions.property.sheetControlsOption"></a>

```go
SheetControlsOption QuicksightDashboardDashboardPublishOptionsSheetControlsOption
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a>

<p>Sheet controls option.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#sheet_controls_option QuicksightDashboard#sheet_controls_option}

---

### QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption <a name="QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption {
	AvailabilityStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `AvailabilityStatus`<sup>Optional</sup> <a name="AvailabilityStatus" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption.property.availabilityStatus"></a>

```go
AvailabilityStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsExportToCsvOption <a name="QuicksightDashboardDashboardPublishOptionsExportToCsvOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption {
	AvailabilityStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}. |

---

##### `AvailabilityStatus`<sup>Optional</sup> <a name="AvailabilityStatus" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption.property.availabilityStatus"></a>

```go
AvailabilityStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#availability_status QuicksightDashboard#availability_status}.

---

### QuicksightDashboardDashboardPublishOptionsSheetControlsOption <a name="QuicksightDashboardDashboardPublishOptionsSheetControlsOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption {
	VisibilityState: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption.property.visibilityState">VisibilityState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#visibility_state QuicksightDashboard#visibility_state}. |

---

##### `VisibilityState`<sup>Optional</sup> <a name="VisibilityState" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption.property.visibilityState"></a>

```go
VisibilityState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#visibility_state QuicksightDashboard#visibility_state}.

---

### QuicksightDashboardParameters <a name="QuicksightDashboardParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardParameters {
	DateTimeParameters: interface{},
	DecimalParameters: interface{},
	IntegerParameters: interface{},
	StringParameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters.property.dateTimeParameters">DateTimeParameters</a></code> | <code>interface{}</code> | <p>Date-time parameters.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters.property.decimalParameters">DecimalParameters</a></code> | <code>interface{}</code> | <p>Decimal parameters.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters.property.integerParameters">IntegerParameters</a></code> | <code>interface{}</code> | <p>Integer parameters.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters.property.stringParameters">StringParameters</a></code> | <code>interface{}</code> | <p>String parameters.</p>. |

---

##### `DateTimeParameters`<sup>Optional</sup> <a name="DateTimeParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters.property.dateTimeParameters"></a>

```go
DateTimeParameters interface{}
```

- *Type:* interface{}

<p>Date-time parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#date_time_parameters QuicksightDashboard#date_time_parameters}

---

##### `DecimalParameters`<sup>Optional</sup> <a name="DecimalParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters.property.decimalParameters"></a>

```go
DecimalParameters interface{}
```

- *Type:* interface{}

<p>Decimal parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#decimal_parameters QuicksightDashboard#decimal_parameters}

---

##### `IntegerParameters`<sup>Optional</sup> <a name="IntegerParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters.property.integerParameters"></a>

```go
IntegerParameters interface{}
```

- *Type:* interface{}

<p>Integer parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#integer_parameters QuicksightDashboard#integer_parameters}

---

##### `StringParameters`<sup>Optional</sup> <a name="StringParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParameters.property.stringParameters"></a>

```go
StringParameters interface{}
```

- *Type:* interface{}

<p>String parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#string_parameters QuicksightDashboard#string_parameters}

---

### QuicksightDashboardParametersDateTimeParameters <a name="QuicksightDashboardParametersDateTimeParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardParametersDateTimeParameters {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.property.name">Name</a></code> | <code>*string</code> | <p>A display name for the date-time parameter.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.property.values">Values</a></code> | <code>*[]*string</code> | <p>The values for the date-time parameter.</p>. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

<p>A display name for the date-time parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParameters.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

<p>The values for the date-time parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}

---

### QuicksightDashboardParametersDecimalParameters <a name="QuicksightDashboardParametersDecimalParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardParametersDecimalParameters {
	Name: *string,
	Values: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.property.name">Name</a></code> | <code>*string</code> | <p>A display name for the decimal parameter.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.property.values">Values</a></code> | <code>*[]*f64</code> | <p>The values for the decimal parameter.</p>. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

<p>A display name for the decimal parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParameters.property.values"></a>

```go
Values *[]*f64
```

- *Type:* *[]*f64

<p>The values for the decimal parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}

---

### QuicksightDashboardParametersIntegerParameters <a name="QuicksightDashboardParametersIntegerParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardParametersIntegerParameters {
	Name: *string,
	Values: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.property.name">Name</a></code> | <code>*string</code> | <p>The name of the integer parameter.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.property.values">Values</a></code> | <code>*[]*f64</code> | <p>The values for the integer parameter.</p>. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

<p>The name of the integer parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParameters.property.values"></a>

```go
Values *[]*f64
```

- *Type:* *[]*f64

<p>The values for the integer parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}

---

### QuicksightDashboardParametersStringParameters <a name="QuicksightDashboardParametersStringParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardParametersStringParameters {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParameters.property.name">Name</a></code> | <code>*string</code> | <p>A display name for a string parameter.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParameters.property.values">Values</a></code> | <code>*[]*string</code> | <p>The values of a string parameter.</p>. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

<p>A display name for a string parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#name QuicksightDashboard#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParameters.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

<p>The values of a string parameter.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#values QuicksightDashboard#values}

---

### QuicksightDashboardPermissions <a name="QuicksightDashboardPermissions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardPermissions {
	Actions: *[]*string,
	Principal: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissions.property.actions">Actions</a></code> | <code>*[]*string</code> | <p>The IAM action to grant or revoke permissions on.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissions.property.principal">Principal</a></code> | <code>*string</code> | <p>The Amazon Resource Name (ARN) of the principal. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissions.property.actions"></a>

```go
Actions *[]*string
```

- *Type:* *[]*string

<p>The IAM action to grant or revoke permissions on.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#actions QuicksightDashboard#actions}

---

##### `Principal`<sup>Optional</sup> <a name="Principal" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissions.property.principal"></a>

```go
Principal *string
```

- *Type:* *string

<p>The Amazon Resource Name (ARN) of the principal.

This can be one of the
following:</p>
<ul>
<li>
<p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
</li>
<li>
<p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
</li>
<li>
<p>The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight
ARN. Use this option only to share resources (templates) across AWS accounts.
(This is less common.) </p>
</li>
</ul>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#principal QuicksightDashboard#principal}

---

### QuicksightDashboardSourceEntity <a name="QuicksightDashboardSourceEntity" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntity.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardSourceEntity {
	SourceTemplate: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntity.property.sourceTemplate">SourceTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a></code> | <p>Dashboard source template.</p>. |

---

##### `SourceTemplate`<sup>Optional</sup> <a name="SourceTemplate" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntity.property.sourceTemplate"></a>

```go
SourceTemplate QuicksightDashboardSourceEntitySourceTemplate
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a>

<p>Dashboard source template.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#source_template QuicksightDashboard#source_template}

---

### QuicksightDashboardSourceEntitySourceTemplate <a name="QuicksightDashboardSourceEntitySourceTemplate" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardSourceEntitySourceTemplate {
	Arn: *string,
	DataSetReferences: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.property.arn">Arn</a></code> | <code>*string</code> | <p>The Amazon Resource Name (ARN) of the resource.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.property.dataSetReferences">DataSetReferences</a></code> | <code>interface{}</code> | <p>Dataset references.</p>. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

<p>The Amazon Resource Name (ARN) of the resource.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#arn QuicksightDashboard#arn}

---

##### `DataSetReferences`<sup>Optional</sup> <a name="DataSetReferences" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate.property.dataSetReferences"></a>

```go
DataSetReferences interface{}
```

- *Type:* interface{}

<p>Dataset references.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#data_set_references QuicksightDashboard#data_set_references}

---

### QuicksightDashboardSourceEntitySourceTemplateDataSetReferences <a name="QuicksightDashboardSourceEntitySourceTemplateDataSetReferences" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences {
	DataSetArn: *string,
	DataSetPlaceholder: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.property.dataSetArn">DataSetArn</a></code> | <code>*string</code> | <p>Dataset Amazon Resource Name (ARN).</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.property.dataSetPlaceholder">DataSetPlaceholder</a></code> | <code>*string</code> | <p>Dataset placeholder.</p>. |

---

##### `DataSetArn`<sup>Optional</sup> <a name="DataSetArn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.property.dataSetArn"></a>

```go
DataSetArn *string
```

- *Type:* *string

<p>Dataset Amazon Resource Name (ARN).</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#data_set_arn QuicksightDashboard#data_set_arn}

---

##### `DataSetPlaceholder`<sup>Optional</sup> <a name="DataSetPlaceholder" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferences.property.dataSetPlaceholder"></a>

```go
DataSetPlaceholder *string
```

- *Type:* *string

<p>Dataset placeholder.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#data_set_placeholder QuicksightDashboard#data_set_placeholder}

---

### QuicksightDashboardTags <a name="QuicksightDashboardTags" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTags.property.key">Key</a></code> | <code>*string</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTags.property.value">Value</a></code> | <code>*string</code> | <p>Tag value.</p>. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#key QuicksightDashboard#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_dashboard#value QuicksightDashboard#value}

---

### QuicksightDashboardVersion <a name="QuicksightDashboardVersion" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardVersion {

}
```


### QuicksightDashboardVersionErrors <a name="QuicksightDashboardVersionErrors" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardVersionErrors {

}
```


### QuicksightDashboardVersionSheets <a name="QuicksightDashboardVersionSheets" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

&quicksightdashboard.QuicksightDashboardVersionSheets {

}
```


## Classes <a name="Classes" id="Classes"></a>

### QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resetAvailabilityStatus">ResetAvailabilityStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityStatus` <a name="ResetAvailabilityStatus" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.resetAvailabilityStatus"></a>

```go
func ResetAvailabilityStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.availabilityStatusInput">AvailabilityStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityStatusInput`<sup>Optional</sup> <a name="AvailabilityStatusInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.availabilityStatusInput"></a>

```go
func AvailabilityStatusInput() *string
```

- *Type:* *string

---

##### `AvailabilityStatus`<sup>Required</sup> <a name="AvailabilityStatus" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.availabilityStatus"></a>

```go
func AvailabilityStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resetAvailabilityStatus">ResetAvailabilityStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityStatus` <a name="ResetAvailabilityStatus" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.resetAvailabilityStatus"></a>

```go
func ResetAvailabilityStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.availabilityStatusInput">AvailabilityStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.availabilityStatus">AvailabilityStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityStatusInput`<sup>Optional</sup> <a name="AvailabilityStatusInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.availabilityStatusInput"></a>

```go
func AvailabilityStatusInput() *string
```

- *Type:* *string

---

##### `AvailabilityStatus`<sup>Required</sup> <a name="AvailabilityStatus" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.availabilityStatus"></a>

```go
func AvailabilityStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardDashboardPublishOptionsOutputReference <a name="QuicksightDashboardDashboardPublishOptionsOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardDashboardPublishOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardDashboardPublishOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putAdHocFilteringOption">PutAdHocFilteringOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportToCsvOption">PutExportToCsvOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetControlsOption">PutSheetControlsOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetAdHocFilteringOption">ResetAdHocFilteringOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetExportToCsvOption">ResetExportToCsvOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetSheetControlsOption">ResetSheetControlsOption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdHocFilteringOption` <a name="PutAdHocFilteringOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putAdHocFilteringOption"></a>

```go
func PutAdHocFilteringOption(value QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putAdHocFilteringOption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOption</a>

---

##### `PutExportToCsvOption` <a name="PutExportToCsvOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportToCsvOption"></a>

```go
func PutExportToCsvOption(value QuicksightDashboardDashboardPublishOptionsExportToCsvOption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putExportToCsvOption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOption">QuicksightDashboardDashboardPublishOptionsExportToCsvOption</a>

---

##### `PutSheetControlsOption` <a name="PutSheetControlsOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetControlsOption"></a>

```go
func PutSheetControlsOption(value QuicksightDashboardDashboardPublishOptionsSheetControlsOption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.putSheetControlsOption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOption">QuicksightDashboardDashboardPublishOptionsSheetControlsOption</a>

---

##### `ResetAdHocFilteringOption` <a name="ResetAdHocFilteringOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetAdHocFilteringOption"></a>

```go
func ResetAdHocFilteringOption()
```

##### `ResetExportToCsvOption` <a name="ResetExportToCsvOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetExportToCsvOption"></a>

```go
func ResetExportToCsvOption()
```

##### `ResetSheetControlsOption` <a name="ResetSheetControlsOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.resetSheetControlsOption"></a>

```go
func ResetSheetControlsOption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.adHocFilteringOption">AdHocFilteringOption</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportToCsvOption">ExportToCsvOption</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference">QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetControlsOption">SheetControlsOption</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference">QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.adHocFilteringOptionInput">AdHocFilteringOptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportToCsvOptionInput">ExportToCsvOptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetControlsOptionInput">SheetControlsOptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdHocFilteringOption`<sup>Required</sup> <a name="AdHocFilteringOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.adHocFilteringOption"></a>

```go
func AdHocFilteringOption() QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference">QuicksightDashboardDashboardPublishOptionsAdHocFilteringOptionOutputReference</a>

---

##### `ExportToCsvOption`<sup>Required</sup> <a name="ExportToCsvOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportToCsvOption"></a>

```go
func ExportToCsvOption() QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference">QuicksightDashboardDashboardPublishOptionsExportToCsvOptionOutputReference</a>

---

##### `SheetControlsOption`<sup>Required</sup> <a name="SheetControlsOption" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetControlsOption"></a>

```go
func SheetControlsOption() QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference">QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference</a>

---

##### `AdHocFilteringOptionInput`<sup>Optional</sup> <a name="AdHocFilteringOptionInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.adHocFilteringOptionInput"></a>

```go
func AdHocFilteringOptionInput() interface{}
```

- *Type:* interface{}

---

##### `ExportToCsvOptionInput`<sup>Optional</sup> <a name="ExportToCsvOptionInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.exportToCsvOptionInput"></a>

```go
func ExportToCsvOptionInput() interface{}
```

- *Type:* interface{}

---

##### `SheetControlsOptionInput`<sup>Optional</sup> <a name="SheetControlsOptionInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.sheetControlsOptionInput"></a>

```go
func SheetControlsOptionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference <a name="QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resetVisibilityState">ResetVisibilityState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVisibilityState` <a name="ResetVisibilityState" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.resetVisibilityState"></a>

```go
func ResetVisibilityState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.visibilityStateInput">VisibilityStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.visibilityState">VisibilityState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VisibilityStateInput`<sup>Optional</sup> <a name="VisibilityStateInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.visibilityStateInput"></a>

```go
func VisibilityStateInput() *string
```

- *Type:* *string

---

##### `VisibilityState`<sup>Required</sup> <a name="VisibilityState" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.visibilityState"></a>

```go
func VisibilityState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardDashboardPublishOptionsSheetControlsOptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardParametersDateTimeParametersList <a name="QuicksightDashboardParametersDateTimeParametersList" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardParametersDateTimeParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDashboardParametersDateTimeParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.get"></a>

```go
func Get(index *f64) QuicksightDashboardParametersDateTimeParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardParametersDateTimeParametersOutputReference <a name="QuicksightDashboardParametersDateTimeParametersOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardParametersDateTimeParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDashboardParametersDateTimeParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardParametersDecimalParametersList <a name="QuicksightDashboardParametersDecimalParametersList" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardParametersDecimalParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDashboardParametersDecimalParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.get"></a>

```go
func Get(index *f64) QuicksightDashboardParametersDecimalParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardParametersDecimalParametersOutputReference <a name="QuicksightDashboardParametersDecimalParametersOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardParametersDecimalParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDashboardParametersDecimalParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.values">Values</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.values"></a>

```go
func Values() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardParametersIntegerParametersList <a name="QuicksightDashboardParametersIntegerParametersList" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardParametersIntegerParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDashboardParametersIntegerParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.get"></a>

```go
func Get(index *f64) QuicksightDashboardParametersIntegerParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardParametersIntegerParametersOutputReference <a name="QuicksightDashboardParametersIntegerParametersOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardParametersIntegerParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDashboardParametersIntegerParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.values">Values</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.values"></a>

```go
func Values() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardParametersOutputReference <a name="QuicksightDashboardParametersOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDateTimeParameters">PutDateTimeParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDecimalParameters">PutDecimalParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putIntegerParameters">PutIntegerParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putStringParameters">PutStringParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetDateTimeParameters">ResetDateTimeParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetDecimalParameters">ResetDecimalParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetIntegerParameters">ResetIntegerParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetStringParameters">ResetStringParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDateTimeParameters` <a name="PutDateTimeParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDateTimeParameters"></a>

```go
func PutDateTimeParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDateTimeParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDecimalParameters` <a name="PutDecimalParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDecimalParameters"></a>

```go
func PutDecimalParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putDecimalParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIntegerParameters` <a name="PutIntegerParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putIntegerParameters"></a>

```go
func PutIntegerParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putIntegerParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStringParameters` <a name="PutStringParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putStringParameters"></a>

```go
func PutStringParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.putStringParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDateTimeParameters` <a name="ResetDateTimeParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetDateTimeParameters"></a>

```go
func ResetDateTimeParameters()
```

##### `ResetDecimalParameters` <a name="ResetDecimalParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetDecimalParameters"></a>

```go
func ResetDecimalParameters()
```

##### `ResetIntegerParameters` <a name="ResetIntegerParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetIntegerParameters"></a>

```go
func ResetIntegerParameters()
```

##### `ResetStringParameters` <a name="ResetStringParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.resetStringParameters"></a>

```go
func ResetStringParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.dateTimeParameters">DateTimeParameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList">QuicksightDashboardParametersDateTimeParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.decimalParameters">DecimalParameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList">QuicksightDashboardParametersDecimalParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.integerParameters">IntegerParameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList">QuicksightDashboardParametersIntegerParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.stringParameters">StringParameters</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList">QuicksightDashboardParametersStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.dateTimeParametersInput">DateTimeParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.decimalParametersInput">DecimalParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.integerParametersInput">IntegerParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.stringParametersInput">StringParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DateTimeParameters`<sup>Required</sup> <a name="DateTimeParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.dateTimeParameters"></a>

```go
func DateTimeParameters() QuicksightDashboardParametersDateTimeParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDateTimeParametersList">QuicksightDashboardParametersDateTimeParametersList</a>

---

##### `DecimalParameters`<sup>Required</sup> <a name="DecimalParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.decimalParameters"></a>

```go
func DecimalParameters() QuicksightDashboardParametersDecimalParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersDecimalParametersList">QuicksightDashboardParametersDecimalParametersList</a>

---

##### `IntegerParameters`<sup>Required</sup> <a name="IntegerParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.integerParameters"></a>

```go
func IntegerParameters() QuicksightDashboardParametersIntegerParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersIntegerParametersList">QuicksightDashboardParametersIntegerParametersList</a>

---

##### `StringParameters`<sup>Required</sup> <a name="StringParameters" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.stringParameters"></a>

```go
func StringParameters() QuicksightDashboardParametersStringParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList">QuicksightDashboardParametersStringParametersList</a>

---

##### `DateTimeParametersInput`<sup>Optional</sup> <a name="DateTimeParametersInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.dateTimeParametersInput"></a>

```go
func DateTimeParametersInput() interface{}
```

- *Type:* interface{}

---

##### `DecimalParametersInput`<sup>Optional</sup> <a name="DecimalParametersInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.decimalParametersInput"></a>

```go
func DecimalParametersInput() interface{}
```

- *Type:* interface{}

---

##### `IntegerParametersInput`<sup>Optional</sup> <a name="IntegerParametersInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.integerParametersInput"></a>

```go
func IntegerParametersInput() interface{}
```

- *Type:* interface{}

---

##### `StringParametersInput`<sup>Optional</sup> <a name="StringParametersInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.stringParametersInput"></a>

```go
func StringParametersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardParametersStringParametersList <a name="QuicksightDashboardParametersStringParametersList" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardParametersStringParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDashboardParametersStringParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.get"></a>

```go
func Get(index *f64) QuicksightDashboardParametersStringParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardParametersStringParametersOutputReference <a name="QuicksightDashboardParametersStringParametersOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardParametersStringParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDashboardParametersStringParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardParametersStringParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardPermissionsList <a name="QuicksightDashboardPermissionsList" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardPermissionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDashboardPermissionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.get"></a>

```go
func Get(index *f64) QuicksightDashboardPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardPermissionsOutputReference <a name="QuicksightDashboardPermissionsOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDashboardPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resetPrincipal">ResetPrincipal</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActions` <a name="ResetActions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resetActions"></a>

```go
func ResetActions()
```

##### `ResetPrincipal` <a name="ResetPrincipal" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.resetPrincipal"></a>

```go
func ResetPrincipal()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.actionsInput">ActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.principalInput">PrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.actions">Actions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.principal">Principal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.actionsInput"></a>

```go
func ActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.principalInput"></a>

```go
func PrincipalInput() *string
```

- *Type:* *string

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.actions"></a>

```go
func Actions() *[]*string
```

- *Type:* *[]*string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.principal"></a>

```go
func Principal() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardSourceEntityOutputReference <a name="QuicksightDashboardSourceEntityOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardSourceEntityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardSourceEntityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.putSourceTemplate">PutSourceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resetSourceTemplate">ResetSourceTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceTemplate` <a name="PutSourceTemplate" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.putSourceTemplate"></a>

```go
func PutSourceTemplate(value QuicksightDashboardSourceEntitySourceTemplate)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.putSourceTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplate">QuicksightDashboardSourceEntitySourceTemplate</a>

---

##### `ResetSourceTemplate` <a name="ResetSourceTemplate" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.resetSourceTemplate"></a>

```go
func ResetSourceTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.sourceTemplate">SourceTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference">QuicksightDashboardSourceEntitySourceTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.sourceTemplateInput">SourceTemplateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceTemplate`<sup>Required</sup> <a name="SourceTemplate" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.sourceTemplate"></a>

```go
func SourceTemplate() QuicksightDashboardSourceEntitySourceTemplateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference">QuicksightDashboardSourceEntitySourceTemplateOutputReference</a>

---

##### `SourceTemplateInput`<sup>Optional</sup> <a name="SourceTemplateInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.sourceTemplateInput"></a>

```go
func SourceTemplateInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList <a name="QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.get"></a>

```go
func Get(index *f64) QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference <a name="QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resetDataSetArn">ResetDataSetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resetDataSetPlaceholder">ResetDataSetPlaceholder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataSetArn` <a name="ResetDataSetArn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resetDataSetArn"></a>

```go
func ResetDataSetArn()
```

##### `ResetDataSetPlaceholder` <a name="ResetDataSetPlaceholder" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.resetDataSetPlaceholder"></a>

```go
func ResetDataSetPlaceholder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArnInput">DataSetArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholderInput">DataSetPlaceholderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArn">DataSetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholder">DataSetPlaceholder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSetArnInput`<sup>Optional</sup> <a name="DataSetArnInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArnInput"></a>

```go
func DataSetArnInput() *string
```

- *Type:* *string

---

##### `DataSetPlaceholderInput`<sup>Optional</sup> <a name="DataSetPlaceholderInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholderInput"></a>

```go
func DataSetPlaceholderInput() *string
```

- *Type:* *string

---

##### `DataSetArn`<sup>Required</sup> <a name="DataSetArn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetArn"></a>

```go
func DataSetArn() *string
```

- *Type:* *string

---

##### `DataSetPlaceholder`<sup>Required</sup> <a name="DataSetPlaceholder" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.dataSetPlaceholder"></a>

```go
func DataSetPlaceholder() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardSourceEntitySourceTemplateOutputReference <a name="QuicksightDashboardSourceEntitySourceTemplateOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardSourceEntitySourceTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardSourceEntitySourceTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.putDataSetReferences">PutDataSetReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resetDataSetReferences">ResetDataSetReferences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataSetReferences` <a name="PutDataSetReferences" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.putDataSetReferences"></a>

```go
func PutDataSetReferences(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.putDataSetReferences.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resetArn"></a>

```go
func ResetArn()
```

##### `ResetDataSetReferences` <a name="ResetDataSetReferences" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.resetDataSetReferences"></a>

```go
func ResetDataSetReferences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.dataSetReferences">DataSetReferences</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList">QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.dataSetReferencesInput">DataSetReferencesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSetReferences`<sup>Required</sup> <a name="DataSetReferences" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.dataSetReferences"></a>

```go
func DataSetReferences() QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList">QuicksightDashboardSourceEntitySourceTemplateDataSetReferencesList</a>

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `DataSetReferencesInput`<sup>Optional</sup> <a name="DataSetReferencesInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.dataSetReferencesInput"></a>

```go
func DataSetReferencesInput() interface{}
```

- *Type:* interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardSourceEntitySourceTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardTagsList <a name="QuicksightDashboardTagsList" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDashboardTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.get"></a>

```go
func Get(index *f64) QuicksightDashboardTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardTagsOutputReference <a name="QuicksightDashboardTagsOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDashboardTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### QuicksightDashboardVersionErrorsList <a name="QuicksightDashboardVersionErrorsList" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardVersionErrorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDashboardVersionErrorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.get"></a>

```go
func Get(index *f64) QuicksightDashboardVersionErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### QuicksightDashboardVersionErrorsOutputReference <a name="QuicksightDashboardVersionErrorsOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardVersionErrorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDashboardVersionErrorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrors">QuicksightDashboardVersionErrors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDashboardVersionErrors
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrors">QuicksightDashboardVersionErrors</a>

---


### QuicksightDashboardVersionOutputReference <a name="QuicksightDashboardVersionOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) QuicksightDashboardVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.dataSetArns">DataSetArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.errors">Errors</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList">QuicksightDashboardVersionErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.sheets">Sheets</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList">QuicksightDashboardVersionSheetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.sourceEntityArn">SourceEntityArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.themeArn">ThemeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.versionNumber">VersionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersion">QuicksightDashboardVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `DataSetArns`<sup>Required</sup> <a name="DataSetArns" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.dataSetArns"></a>

```go
func DataSetArns() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Errors`<sup>Required</sup> <a name="Errors" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.errors"></a>

```go
func Errors() QuicksightDashboardVersionErrorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionErrorsList">QuicksightDashboardVersionErrorsList</a>

---

##### `Sheets`<sup>Required</sup> <a name="Sheets" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.sheets"></a>

```go
func Sheets() QuicksightDashboardVersionSheetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList">QuicksightDashboardVersionSheetsList</a>

---

##### `SourceEntityArn`<sup>Required</sup> <a name="SourceEntityArn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.sourceEntityArn"></a>

```go
func SourceEntityArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `ThemeArn`<sup>Required</sup> <a name="ThemeArn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.themeArn"></a>

```go
func ThemeArn() *string
```

- *Type:* *string

---

##### `VersionNumber`<sup>Required</sup> <a name="VersionNumber" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.versionNumber"></a>

```go
func VersionNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDashboardVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersion">QuicksightDashboardVersion</a>

---


### QuicksightDashboardVersionSheetsList <a name="QuicksightDashboardVersionSheetsList" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardVersionSheetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) QuicksightDashboardVersionSheetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.get"></a>

```go
func Get(index *f64) QuicksightDashboardVersionSheetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### QuicksightDashboardVersionSheetsOutputReference <a name="QuicksightDashboardVersionSheetsOutputReference" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/quicksightdashboard"

quicksightdashboard.NewQuicksightDashboardVersionSheetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) QuicksightDashboardVersionSheetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.property.sheetId">SheetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheets">QuicksightDashboardVersionSheets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SheetId`<sup>Required</sup> <a name="SheetId" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.property.sheetId"></a>

```go
func SheetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheetsOutputReference.property.internalValue"></a>

```go
func InternalValue() QuicksightDashboardVersionSheets
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightDashboard.QuicksightDashboardVersionSheets">QuicksightDashboardVersionSheets</a>

---



