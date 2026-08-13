# `sagemakerMlflowTrackingServer` Submodule <a name="`sagemakerMlflowTrackingServer` Submodule" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerMlflowTrackingServer <a name="SagemakerMlflowTrackingServer" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server awscc_sagemaker_mlflow_tracking_server}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermlflowtrackingserver"

sagemakermlflowtrackingserver.NewSagemakerMlflowTrackingServer(scope Construct, id *string, config SagemakerMlflowTrackingServerConfig) SagemakerMlflowTrackingServer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig">SagemakerMlflowTrackingServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig">SagemakerMlflowTrackingServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetAutomaticModelRegistration">ResetAutomaticModelRegistration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetMlflowVersion">ResetMlflowVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetTrackingServerSize">ResetTrackingServerSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetWeeklyMaintenanceWindowStart">ResetWeeklyMaintenanceWindowStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutomaticModelRegistration` <a name="ResetAutomaticModelRegistration" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetAutomaticModelRegistration"></a>

```go
func ResetAutomaticModelRegistration()
```

##### `ResetMlflowVersion` <a name="ResetMlflowVersion" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetMlflowVersion"></a>

```go
func ResetMlflowVersion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTrackingServerSize` <a name="ResetTrackingServerSize" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetTrackingServerSize"></a>

```go
func ResetTrackingServerSize()
```

##### `ResetWeeklyMaintenanceWindowStart` <a name="ResetWeeklyMaintenanceWindowStart" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.resetWeeklyMaintenanceWindowStart"></a>

```go
func ResetWeeklyMaintenanceWindowStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerMlflowTrackingServer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermlflowtrackingserver"

sagemakermlflowtrackingserver.SagemakerMlflowTrackingServer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermlflowtrackingserver"

sagemakermlflowtrackingserver.SagemakerMlflowTrackingServer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermlflowtrackingserver"

sagemakermlflowtrackingserver.SagemakerMlflowTrackingServer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermlflowtrackingserver"

sagemakermlflowtrackingserver.SagemakerMlflowTrackingServer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SagemakerMlflowTrackingServer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerMlflowTrackingServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerMlflowTrackingServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerMlflowTrackingServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList">SagemakerMlflowTrackingServerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerArn">TrackingServerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.artifactStoreUriInput">ArtifactStoreUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.automaticModelRegistrationInput">AutomaticModelRegistrationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.mlflowVersionInput">MlflowVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerNameInput">TrackingServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerSizeInput">TrackingServerSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.weeklyMaintenanceWindowStartInput">WeeklyMaintenanceWindowStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.artifactStoreUri">ArtifactStoreUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.automaticModelRegistration">AutomaticModelRegistration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.mlflowVersion">MlflowVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerName">TrackingServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerSize">TrackingServerSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.weeklyMaintenanceWindowStart">WeeklyMaintenanceWindowStart</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tags"></a>

```go
func Tags() SagemakerMlflowTrackingServerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList">SagemakerMlflowTrackingServerTagsList</a>

---

##### `TrackingServerArn`<sup>Required</sup> <a name="TrackingServerArn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerArn"></a>

```go
func TrackingServerArn() *string
```

- *Type:* *string

---

##### `ArtifactStoreUriInput`<sup>Optional</sup> <a name="ArtifactStoreUriInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.artifactStoreUriInput"></a>

```go
func ArtifactStoreUriInput() *string
```

- *Type:* *string

---

##### `AutomaticModelRegistrationInput`<sup>Optional</sup> <a name="AutomaticModelRegistrationInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.automaticModelRegistrationInput"></a>

```go
func AutomaticModelRegistrationInput() interface{}
```

- *Type:* interface{}

---

##### `MlflowVersionInput`<sup>Optional</sup> <a name="MlflowVersionInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.mlflowVersionInput"></a>

```go
func MlflowVersionInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TrackingServerNameInput`<sup>Optional</sup> <a name="TrackingServerNameInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerNameInput"></a>

```go
func TrackingServerNameInput() *string
```

- *Type:* *string

---

##### `TrackingServerSizeInput`<sup>Optional</sup> <a name="TrackingServerSizeInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerSizeInput"></a>

```go
func TrackingServerSizeInput() *string
```

- *Type:* *string

---

##### `WeeklyMaintenanceWindowStartInput`<sup>Optional</sup> <a name="WeeklyMaintenanceWindowStartInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.weeklyMaintenanceWindowStartInput"></a>

```go
func WeeklyMaintenanceWindowStartInput() *string
```

- *Type:* *string

---

##### `ArtifactStoreUri`<sup>Required</sup> <a name="ArtifactStoreUri" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.artifactStoreUri"></a>

```go
func ArtifactStoreUri() *string
```

- *Type:* *string

---

##### `AutomaticModelRegistration`<sup>Required</sup> <a name="AutomaticModelRegistration" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.automaticModelRegistration"></a>

```go
func AutomaticModelRegistration() interface{}
```

- *Type:* interface{}

---

##### `MlflowVersion`<sup>Required</sup> <a name="MlflowVersion" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.mlflowVersion"></a>

```go
func MlflowVersion() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `TrackingServerName`<sup>Required</sup> <a name="TrackingServerName" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerName"></a>

```go
func TrackingServerName() *string
```

- *Type:* *string

---

##### `TrackingServerSize`<sup>Required</sup> <a name="TrackingServerSize" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.trackingServerSize"></a>

```go
func TrackingServerSize() *string
```

- *Type:* *string

---

##### `WeeklyMaintenanceWindowStart`<sup>Required</sup> <a name="WeeklyMaintenanceWindowStart" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.weeklyMaintenanceWindowStart"></a>

```go
func WeeklyMaintenanceWindowStart() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerMlflowTrackingServerConfig <a name="SagemakerMlflowTrackingServerConfig" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermlflowtrackingserver"

&sagemakermlflowtrackingserver.SagemakerMlflowTrackingServerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ArtifactStoreUri: *string,
	RoleArn: *string,
	TrackingServerName: *string,
	AutomaticModelRegistration: interface{},
	MlflowVersion: *string,
	Tags: interface{},
	TrackingServerSize: *string,
	WeeklyMaintenanceWindowStart: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.artifactStoreUri">ArtifactStoreUri</a></code> | <code>*string</code> | The Amazon S3 URI for MLFlow Tracking Server artifacts. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on behalf of the customer. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.trackingServerName">TrackingServerName</a></code> | <code>*string</code> | The name of the MLFlow Tracking Server. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.automaticModelRegistration">AutomaticModelRegistration</a></code> | <code>interface{}</code> | A flag to enable Automatic SageMaker Model Registration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.mlflowVersion">MlflowVersion</a></code> | <code>*string</code> | The MLFlow Version used on the MLFlow Tracking Server. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.trackingServerSize">TrackingServerSize</a></code> | <code>*string</code> | The size of the MLFlow Tracking Server. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.weeklyMaintenanceWindowStart">WeeklyMaintenanceWindowStart</a></code> | <code>*string</code> | The start of the time window for maintenance of the MLFlow Tracking Server in UTC time. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArtifactStoreUri`<sup>Required</sup> <a name="ArtifactStoreUri" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.artifactStoreUri"></a>

```go
ArtifactStoreUri *string
```

- *Type:* *string

The Amazon S3 URI for MLFlow Tracking Server artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#artifact_store_uri SagemakerMlflowTrackingServer#artifact_store_uri}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of an IAM role that enables Amazon SageMaker to perform tasks on behalf of the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#role_arn SagemakerMlflowTrackingServer#role_arn}

---

##### `TrackingServerName`<sup>Required</sup> <a name="TrackingServerName" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.trackingServerName"></a>

```go
TrackingServerName *string
```

- *Type:* *string

The name of the MLFlow Tracking Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#tracking_server_name SagemakerMlflowTrackingServer#tracking_server_name}

---

##### `AutomaticModelRegistration`<sup>Optional</sup> <a name="AutomaticModelRegistration" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.automaticModelRegistration"></a>

```go
AutomaticModelRegistration interface{}
```

- *Type:* interface{}

A flag to enable Automatic SageMaker Model Registration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#automatic_model_registration SagemakerMlflowTrackingServer#automatic_model_registration}

---

##### `MlflowVersion`<sup>Optional</sup> <a name="MlflowVersion" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.mlflowVersion"></a>

```go
MlflowVersion *string
```

- *Type:* *string

The MLFlow Version used on the MLFlow Tracking Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#mlflow_version SagemakerMlflowTrackingServer#mlflow_version}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#tags SagemakerMlflowTrackingServer#tags}

---

##### `TrackingServerSize`<sup>Optional</sup> <a name="TrackingServerSize" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.trackingServerSize"></a>

```go
TrackingServerSize *string
```

- *Type:* *string

The size of the MLFlow Tracking Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#tracking_server_size SagemakerMlflowTrackingServer#tracking_server_size}

---

##### `WeeklyMaintenanceWindowStart`<sup>Optional</sup> <a name="WeeklyMaintenanceWindowStart" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerConfig.property.weeklyMaintenanceWindowStart"></a>

```go
WeeklyMaintenanceWindowStart *string
```

- *Type:* *string

The start of the time window for maintenance of the MLFlow Tracking Server in UTC time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#weekly_maintenance_window_start SagemakerMlflowTrackingServer#weekly_maintenance_window_start}

---

### SagemakerMlflowTrackingServerTags <a name="SagemakerMlflowTrackingServerTags" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermlflowtrackingserver"

&sagemakermlflowtrackingserver.SagemakerMlflowTrackingServerTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#key SagemakerMlflowTrackingServer#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_mlflow_tracking_server#value SagemakerMlflowTrackingServer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerMlflowTrackingServerTagsList <a name="SagemakerMlflowTrackingServerTagsList" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermlflowtrackingserver"

sagemakermlflowtrackingserver.NewSagemakerMlflowTrackingServerTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerMlflowTrackingServerTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.get"></a>

```go
func Get(index *f64) SagemakerMlflowTrackingServerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerMlflowTrackingServerTagsOutputReference <a name="SagemakerMlflowTrackingServerTagsOutputReference" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakermlflowtrackingserver"

sagemakermlflowtrackingserver.NewSagemakerMlflowTrackingServerTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerMlflowTrackingServerTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerMlflowTrackingServer.SagemakerMlflowTrackingServerTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



