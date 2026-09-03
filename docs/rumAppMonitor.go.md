# `rumAppMonitor` Submodule <a name="`rumAppMonitor` Submodule" id="@cdktn/provider-awscc.rumAppMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RumAppMonitor <a name="RumAppMonitor" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor awscc_rum_app_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

rumappmonitor.NewRumAppMonitor(scope Construct, id *string, config RumAppMonitorConfig) RumAppMonitor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig">RumAppMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig">RumAppMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration">PutAppMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putCustomEvents">PutCustomEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putDeobfuscationConfiguration">PutDeobfuscationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putResourcePolicy">PutResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetAppMonitorConfiguration">ResetAppMonitorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetCustomEvents">ResetCustomEvents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetCwLogEnabled">ResetCwLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDeobfuscationConfiguration">ResetDeobfuscationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDomainList">ResetDomainList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetPlatform">ResetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetResourcePolicy">ResetResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAppMonitorConfiguration` <a name="PutAppMonitorConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration"></a>

```go
func PutAppMonitorConfiguration(value RumAppMonitorAppMonitorConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putAppMonitorConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

---

##### `PutCustomEvents` <a name="PutCustomEvents" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putCustomEvents"></a>

```go
func PutCustomEvents(value RumAppMonitorCustomEvents)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putCustomEvents.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

---

##### `PutDeobfuscationConfiguration` <a name="PutDeobfuscationConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putDeobfuscationConfiguration"></a>

```go
func PutDeobfuscationConfiguration(value RumAppMonitorDeobfuscationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putDeobfuscationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a>

---

##### `PutResourcePolicy` <a name="PutResourcePolicy" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putResourcePolicy"></a>

```go
func PutResourcePolicy(value RumAppMonitorResourcePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putResourcePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAppMonitorConfiguration` <a name="ResetAppMonitorConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetAppMonitorConfiguration"></a>

```go
func ResetAppMonitorConfiguration()
```

##### `ResetCustomEvents` <a name="ResetCustomEvents" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetCustomEvents"></a>

```go
func ResetCustomEvents()
```

##### `ResetCwLogEnabled` <a name="ResetCwLogEnabled" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetCwLogEnabled"></a>

```go
func ResetCwLogEnabled()
```

##### `ResetDeobfuscationConfiguration` <a name="ResetDeobfuscationConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDeobfuscationConfiguration"></a>

```go
func ResetDeobfuscationConfiguration()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDomain"></a>

```go
func ResetDomain()
```

##### `ResetDomainList` <a name="ResetDomainList" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetDomainList"></a>

```go
func ResetDomainList()
```

##### `ResetPlatform` <a name="ResetPlatform" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetPlatform"></a>

```go
func ResetPlatform()
```

##### `ResetResourcePolicy` <a name="ResetResourcePolicy" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetResourcePolicy"></a>

```go
func ResetResourcePolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RumAppMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

rumappmonitor.RumAppMonitor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

rumappmonitor.RumAppMonitor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

rumappmonitor.RumAppMonitor_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

rumappmonitor.RumAppMonitor_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RumAppMonitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RumAppMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RumAppMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RumAppMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorConfiguration">AppMonitorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference">RumAppMonitorAppMonitorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorId">AppMonitorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.customEvents">CustomEvents</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference">RumAppMonitorCustomEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.deobfuscationConfiguration">DeobfuscationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference">RumAppMonitorDeobfuscationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.resourcePolicy">ResourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference">RumAppMonitorResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList">RumAppMonitorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorConfigurationInput">AppMonitorConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.customEventsInput">CustomEventsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cwLogEnabledInput">CwLogEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.deobfuscationConfigurationInput">DeobfuscationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainListInput">DomainListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.platformInput">PlatformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.resourcePolicyInput">ResourcePolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cwLogEnabled">CwLogEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainList">DomainList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppMonitorConfiguration`<sup>Required</sup> <a name="AppMonitorConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorConfiguration"></a>

```go
func AppMonitorConfiguration() RumAppMonitorAppMonitorConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference">RumAppMonitorAppMonitorConfigurationOutputReference</a>

---

##### `AppMonitorId`<sup>Required</sup> <a name="AppMonitorId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorId"></a>

```go
func AppMonitorId() *string
```

- *Type:* *string

---

##### `CustomEvents`<sup>Required</sup> <a name="CustomEvents" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.customEvents"></a>

```go
func CustomEvents() RumAppMonitorCustomEventsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference">RumAppMonitorCustomEventsOutputReference</a>

---

##### `DeobfuscationConfiguration`<sup>Required</sup> <a name="DeobfuscationConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.deobfuscationConfiguration"></a>

```go
func DeobfuscationConfiguration() RumAppMonitorDeobfuscationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference">RumAppMonitorDeobfuscationConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResourcePolicy`<sup>Required</sup> <a name="ResourcePolicy" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.resourcePolicy"></a>

```go
func ResourcePolicy() RumAppMonitorResourcePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference">RumAppMonitorResourcePolicyOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tags"></a>

```go
func Tags() RumAppMonitorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList">RumAppMonitorTagsList</a>

---

##### `AppMonitorConfigurationInput`<sup>Optional</sup> <a name="AppMonitorConfigurationInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.appMonitorConfigurationInput"></a>

```go
func AppMonitorConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `CustomEventsInput`<sup>Optional</sup> <a name="CustomEventsInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.customEventsInput"></a>

```go
func CustomEventsInput() interface{}
```

- *Type:* interface{}

---

##### `CwLogEnabledInput`<sup>Optional</sup> <a name="CwLogEnabledInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cwLogEnabledInput"></a>

```go
func CwLogEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DeobfuscationConfigurationInput`<sup>Optional</sup> <a name="DeobfuscationConfigurationInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.deobfuscationConfigurationInput"></a>

```go
func DeobfuscationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `DomainListInput`<sup>Optional</sup> <a name="DomainListInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainListInput"></a>

```go
func DomainListInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.platformInput"></a>

```go
func PlatformInput() *string
```

- *Type:* *string

---

##### `ResourcePolicyInput`<sup>Optional</sup> <a name="ResourcePolicyInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.resourcePolicyInput"></a>

```go
func ResourcePolicyInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `CwLogEnabled`<sup>Required</sup> <a name="CwLogEnabled" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.cwLogEnabled"></a>

```go
func CwLogEnabled() interface{}
```

- *Type:* interface{}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `DomainList`<sup>Required</sup> <a name="DomainList" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.domainList"></a>

```go
func DomainList() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RumAppMonitorAppMonitorConfiguration <a name="RumAppMonitorAppMonitorConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

&rumappmonitor.RumAppMonitorAppMonitorConfiguration {
	AllowCookies: interface{},
	EnableXRay: interface{},
	ExcludedPages: *[]*string,
	FavoritePages: *[]*string,
	GuestRoleArn: *string,
	IdentityPoolId: *string,
	IncludedPages: *[]*string,
	MetricDestinations: interface{},
	SessionSampleRate: *f64,
	Telemetries: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.allowCookies">AllowCookies</a></code> | <code>interface{}</code> | If you set this to true, the RUM web client sets two cookies, a session cookie and a user cookie. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.enableXRay">EnableXRay</a></code> | <code>interface{}</code> | If you set this to true, RUM enables xray tracing for the user sessions that RUM samples. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.excludedPages">ExcludedPages</a></code> | <code>*[]*string</code> | A list of URLs in your website or application to exclude from RUM data collection. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.favoritePages">FavoritePages</a></code> | <code>*[]*string</code> | A list of pages in the RUM console that are to be displayed with a favorite icon. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.guestRoleArn">GuestRoleArn</a></code> | <code>*string</code> | The ARN of the guest IAM role that is attached to the identity pool that is used to authorize the sending of data to RUM. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.identityPoolId">IdentityPoolId</a></code> | <code>*string</code> | The ID of the identity pool that is used to authorize the sending of data to RUM. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.includedPages">IncludedPages</a></code> | <code>*[]*string</code> | If this app monitor is to collect data from only certain pages in your application, this structure lists those pages. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.metricDestinations">MetricDestinations</a></code> | <code>interface{}</code> | An array of structures which define the destinations and the metrics that you want to send. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.sessionSampleRate">SessionSampleRate</a></code> | <code>*f64</code> | Specifies the percentage of user sessions to use for RUM data collection. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.telemetries">Telemetries</a></code> | <code>*[]*string</code> | An array that lists the types of telemetry data that this app monitor is to collect. |

---

##### `AllowCookies`<sup>Optional</sup> <a name="AllowCookies" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.allowCookies"></a>

```go
AllowCookies interface{}
```

- *Type:* interface{}

If you set this to true, the RUM web client sets two cookies, a session cookie and a user cookie.

The cookies allow the RUM web client to collect data relating to the number of users an application has and the behavior of the application across a sequence of events. Cookies are stored in the top-level domain of the current page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#allow_cookies RumAppMonitor#allow_cookies}

---

##### `EnableXRay`<sup>Optional</sup> <a name="EnableXRay" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.enableXRay"></a>

```go
EnableXRay interface{}
```

- *Type:* interface{}

If you set this to true, RUM enables xray tracing for the user sessions that RUM samples.

RUM adds an xray trace header to allowed HTTP requests. It also records an xray segment for allowed HTTP requests. You can see traces and segments from these user sessions in the xray console and the CW ServiceLens console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#enable_x_ray RumAppMonitor#enable_x_ray}

---

##### `ExcludedPages`<sup>Optional</sup> <a name="ExcludedPages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.excludedPages"></a>

```go
ExcludedPages *[]*string
```

- *Type:* *[]*string

A list of URLs in your website or application to exclude from RUM data collection.

You can't include both ExcludedPages and IncludedPages in the same operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#excluded_pages RumAppMonitor#excluded_pages}

---

##### `FavoritePages`<sup>Optional</sup> <a name="FavoritePages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.favoritePages"></a>

```go
FavoritePages *[]*string
```

- *Type:* *[]*string

A list of pages in the RUM console that are to be displayed with a favorite icon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#favorite_pages RumAppMonitor#favorite_pages}

---

##### `GuestRoleArn`<sup>Optional</sup> <a name="GuestRoleArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.guestRoleArn"></a>

```go
GuestRoleArn *string
```

- *Type:* *string

The ARN of the guest IAM role that is attached to the identity pool that is used to authorize the sending of data to RUM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#guest_role_arn RumAppMonitor#guest_role_arn}

---

##### `IdentityPoolId`<sup>Optional</sup> <a name="IdentityPoolId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.identityPoolId"></a>

```go
IdentityPoolId *string
```

- *Type:* *string

The ID of the identity pool that is used to authorize the sending of data to RUM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#identity_pool_id RumAppMonitor#identity_pool_id}

---

##### `IncludedPages`<sup>Optional</sup> <a name="IncludedPages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.includedPages"></a>

```go
IncludedPages *[]*string
```

- *Type:* *[]*string

If this app monitor is to collect data from only certain pages in your application, this structure lists those pages.

You can't include both ExcludedPages and IncludedPages in the same operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#included_pages RumAppMonitor#included_pages}

---

##### `MetricDestinations`<sup>Optional</sup> <a name="MetricDestinations" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.metricDestinations"></a>

```go
MetricDestinations interface{}
```

- *Type:* interface{}

An array of structures which define the destinations and the metrics that you want to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#metric_destinations RumAppMonitor#metric_destinations}

---

##### `SessionSampleRate`<sup>Optional</sup> <a name="SessionSampleRate" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.sessionSampleRate"></a>

```go
SessionSampleRate *f64
```

- *Type:* *f64

Specifies the percentage of user sessions to use for RUM data collection.

Choosing a higher percentage gives you more data but also incurs more costs. The number you specify is the percentage of user sessions that will be used. If you omit this parameter, the default of 10 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#session_sample_rate RumAppMonitor#session_sample_rate}

---

##### `Telemetries`<sup>Optional</sup> <a name="Telemetries" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration.property.telemetries"></a>

```go
Telemetries *[]*string
```

- *Type:* *[]*string

An array that lists the types of telemetry data that this app monitor is to collect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#telemetries RumAppMonitor#telemetries}

---

### RumAppMonitorAppMonitorConfigurationMetricDestinations <a name="RumAppMonitorAppMonitorConfigurationMetricDestinations" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

&rumappmonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations {
	Destination: *string,
	DestinationArn: *string,
	IamRoleArn: *string,
	MetricDefinitions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.destination">Destination</a></code> | <code>*string</code> | Defines the destination to send the metrics to. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.destinationArn">DestinationArn</a></code> | <code>*string</code> | Evidently has been discontinued and therefore this is no longer an acceptable field. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | Evidently has been discontinued and therefore this is no longer an acceptable field. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.metricDefinitions">MetricDefinitions</a></code> | <code>interface{}</code> | An array of structures which define the metrics that you want to send. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Defines the destination to send the metrics to.

Valid values are CloudWatch and Evidently. Note: Evidently has been discontinued and is no longer supported - requests with Evidently will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#destination RumAppMonitor#destination}

---

##### `DestinationArn`<sup>Optional</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.destinationArn"></a>

```go
DestinationArn *string
```

- *Type:* *string

Evidently has been discontinued and therefore this is no longer an acceptable field.

If Destination is CloudWatch, do not use this parameter.

This parameter specifies the ARN of the Evidently experiment that will receive the extended metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#destination_arn RumAppMonitor#destination_arn}

---

##### `IamRoleArn`<sup>Optional</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.iamRoleArn"></a>

```go
IamRoleArn *string
```

- *Type:* *string

Evidently has been discontinued and therefore this is no longer an acceptable field.

If Destination is CloudWatch, do not use this parameter.

This parameter specifies the ARN of an IAM role that RUM will assume to write to the Evidently experiment that you are sending metrics to. This role must have permission to write to that experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#iam_role_arn RumAppMonitor#iam_role_arn}

---

##### `MetricDefinitions`<sup>Optional</sup> <a name="MetricDefinitions" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinations.property.metricDefinitions"></a>

```go
MetricDefinitions interface{}
```

- *Type:* interface{}

An array of structures which define the metrics that you want to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#metric_definitions RumAppMonitor#metric_definitions}

---

### RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions <a name="RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

&rumappmonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions {
	DimensionKeys: *map[string]*string,
	EventPattern: *string,
	Name: *string,
	Namespace: *string,
	UnitLabel: *string,
	ValueKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.dimensionKeys">DimensionKeys</a></code> | <code>*map[string]*string</code> | Use this field only if you are sending the metric to CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.eventPattern">EventPattern</a></code> | <code>*string</code> | The pattern that defines the metric, specified as a JSON object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.name">Name</a></code> | <code>*string</code> | The name for the metric that is defined in this structure. For extended metrics, valid values are the following:. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.namespace">Namespace</a></code> | <code>*string</code> | The namespace used by CloudWatch Metrics for the metric that is defined in this structure. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.unitLabel">UnitLabel</a></code> | <code>*string</code> | The CloudWatch metric unit to use for this metric. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.valueKey">ValueKey</a></code> | <code>*string</code> | The field within the event object that the metric value is sourced from. |

---

##### `DimensionKeys`<sup>Optional</sup> <a name="DimensionKeys" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.dimensionKeys"></a>

```go
DimensionKeys *map[string]*string
```

- *Type:* *map[string]*string

Use this field only if you are sending the metric to CloudWatch.

This field is a map of field paths to dimension names. It defines the dimensions to associate with this metric in CloudWatch. For extended metrics, valid values for the entries in this field are the following:

"metadata.pageId": "PageId"

"metadata.browserName": "BrowserName"

"metadata.deviceType": "DeviceType"

"metadata.osName": "OSName"

"metadata.countryCode": "CountryCode"

"event_details.fileType": "FileType"

All dimensions listed in this field must also be included in EventPattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#dimension_keys RumAppMonitor#dimension_keys}

---

##### `EventPattern`<sup>Optional</sup> <a name="EventPattern" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.eventPattern"></a>

```go
EventPattern *string
```

- *Type:* *string

The pattern that defines the metric, specified as a JSON object.

RUM checks events that happen in a user's session against the pattern, and events that match the pattern are sent to the metric destination.

When you define extended metrics, the metric definition is not valid if EventPattern is omitted.

Example event patterns:

'{ "event_type": ["com.amazon.rum.js_error_event"], "metadata": { "browserName": [ "Chrome", "Safari" ], } }'

'{ "event_type": ["com.amazon.rum.performance_navigation_event"], "metadata": { "browserName": [ "Chrome", "Firefox" ] }, "event_details": { "duration": [{ "numeric": [ "<", 2000 ] }] } }'

'{ "event_type": ["com.amazon.rum.performance_navigation_event"], "metadata": { "browserName": [ "Chrome", "Safari" ], "countryCode": [ "US" ] }, "event_details": { "duration": [{ "numeric": [ ">=", 2000, "<", 8000 ] }] } }'

If the metrics destination' is CloudWatch and the event also matches a value in DimensionKeys, then the metric is published with the specified dimensions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#event_pattern RumAppMonitor#event_pattern}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for the metric that is defined in this structure. For extended metrics, valid values are the following:.

PerformanceNavigationDuration

PerformanceResourceDuration

NavigationSatisfiedTransaction

NavigationToleratedTransaction

NavigationFrustratedTransaction

WebVitalsCumulativeLayoutShift

WebVitalsFirstInputDelay

WebVitalsLargestContentfulPaint

WebVitalsInteractionToNextPaint

JsErrorCount

HttpErrorCount

SessionCount

PageViewCount

Http4xxCount

Http5xxCount

SessionDuration

PageViewCountPerSession

JsErrorCountPerSession

Http4xxCountPerSession

Http5xxCountPerSession

JsErrorCountPerPageView

Http4xxCountPerPageView

Http5xxCountPerPageView

TimeOnPage

ColdLaunchTime

WarmLaunchTime

CrashCount

ANRCount

AppHangCount

ScreenLoadCount

ScreenLoadTime

NetworkLatency

SpanPayloadSize

LogEventPayloadSize

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#name RumAppMonitor#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The namespace used by CloudWatch Metrics for the metric that is defined in this structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#namespace RumAppMonitor#namespace}

---

##### `UnitLabel`<sup>Optional</sup> <a name="UnitLabel" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.unitLabel"></a>

```go
UnitLabel *string
```

- *Type:* *string

The CloudWatch metric unit to use for this metric.

If you omit this field, the metric is recorded with no unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#unit_label RumAppMonitor#unit_label}

---

##### `ValueKey`<sup>Optional</sup> <a name="ValueKey" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.property.valueKey"></a>

```go
ValueKey *string
```

- *Type:* *string

The field within the event object that the metric value is sourced from.

If you omit this field, a hardcoded value of 1 is pushed as the metric value. This is useful if you just want to count the number of events that the filter catches.

If this metric is sent to Evidently, this field will be passed to Evidently raw and Evidently will handle data extraction from the event. Note: Evidently has been discontinued.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#value_key RumAppMonitor#value_key}

---

### RumAppMonitorConfig <a name="RumAppMonitorConfig" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

&rumappmonitor.RumAppMonitorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AppMonitorConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration,
	CustomEvents: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rumAppMonitor.RumAppMonitorCustomEvents,
	CwLogEnabled: interface{},
	DeobfuscationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration,
	Domain: *string,
	DomainList: *[]*string,
	Platform: *string,
	ResourcePolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rumAppMonitor.RumAppMonitorResourcePolicy,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.name">Name</a></code> | <code>*string</code> | A name for the app monitor. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.appMonitorConfiguration">AppMonitorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a></code> | AppMonitor configuration. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.customEvents">CustomEvents</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a></code> | AppMonitor custom events configuration. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.cwLogEnabled">CwLogEnabled</a></code> | <code>interface{}</code> | Data collected by RUM is kept by RUM for 30 days and then deleted. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.deobfuscationConfiguration">DeobfuscationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a></code> | A structure that contains the configuration for how an app monitor can deobfuscate stack traces. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.domain">Domain</a></code> | <code>*string</code> | The top-level internet domain name for which your application has administrative authority. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.domainList">DomainList</a></code> | <code>*[]*string</code> | The top-level internet domain names for which your application has administrative authority. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.platform">Platform</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#platform RumAppMonitor#platform}. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.resourcePolicy">ResourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a></code> | A structure that defines resource policy attached to your app monitor. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Assigns one or more tags (key-value pairs) to the app monitor. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A name for the app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#name RumAppMonitor#name}

---

##### `AppMonitorConfiguration`<sup>Optional</sup> <a name="AppMonitorConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.appMonitorConfiguration"></a>

```go
AppMonitorConfiguration RumAppMonitorAppMonitorConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfiguration">RumAppMonitorAppMonitorConfiguration</a>

AppMonitor configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#app_monitor_configuration RumAppMonitor#app_monitor_configuration}

---

##### `CustomEvents`<sup>Optional</sup> <a name="CustomEvents" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.customEvents"></a>

```go
CustomEvents RumAppMonitorCustomEvents
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents">RumAppMonitorCustomEvents</a>

AppMonitor custom events configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#custom_events RumAppMonitor#custom_events}

---

##### `CwLogEnabled`<sup>Optional</sup> <a name="CwLogEnabled" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.cwLogEnabled"></a>

```go
CwLogEnabled interface{}
```

- *Type:* interface{}

Data collected by RUM is kept by RUM for 30 days and then deleted.

This parameter specifies whether RUM sends a copy of this telemetry data to CWLlong in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur CWLlong charges. If you omit this parameter, the default is false

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#cw_log_enabled RumAppMonitor#cw_log_enabled}

---

##### `DeobfuscationConfiguration`<sup>Optional</sup> <a name="DeobfuscationConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.deobfuscationConfiguration"></a>

```go
DeobfuscationConfiguration RumAppMonitorDeobfuscationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration">RumAppMonitorDeobfuscationConfiguration</a>

A structure that contains the configuration for how an app monitor can deobfuscate stack traces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#deobfuscation_configuration RumAppMonitor#deobfuscation_configuration}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

The top-level internet domain name for which your application has administrative authority.

The CreateAppMonitor requires either the domain or the domain list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#domain RumAppMonitor#domain}

---

##### `DomainList`<sup>Optional</sup> <a name="DomainList" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.domainList"></a>

```go
DomainList *[]*string
```

- *Type:* *[]*string

The top-level internet domain names for which your application has administrative authority.

The CreateAppMonitor requires either the domain or the domain list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#domain_list RumAppMonitor#domain_list}

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.platform"></a>

```go
Platform *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#platform RumAppMonitor#platform}.

---

##### `ResourcePolicy`<sup>Optional</sup> <a name="ResourcePolicy" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.resourcePolicy"></a>

```go
ResourcePolicy RumAppMonitorResourcePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy">RumAppMonitorResourcePolicy</a>

A structure that defines resource policy attached to your app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#resource_policy RumAppMonitor#resource_policy}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Assigns one or more tags (key-value pairs) to the app monitor.

Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.You can associate as many as 50 tags with an app monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#tags RumAppMonitor#tags}

---

### RumAppMonitorCustomEvents <a name="RumAppMonitorCustomEvents" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

&rumappmonitor.RumAppMonitorCustomEvents {
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents.property.status">Status</a></code> | <code>*string</code> | Indicates whether AppMonitor accepts custom events. |

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEvents.property.status"></a>

```go
Status *string
```

- *Type:* *string

Indicates whether AppMonitor accepts custom events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#status RumAppMonitor#status}

---

### RumAppMonitorDeobfuscationConfiguration <a name="RumAppMonitorDeobfuscationConfiguration" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

&rumappmonitor.RumAppMonitorDeobfuscationConfiguration {
	JavaScriptSourceMaps: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration.property.javaScriptSourceMaps">JavaScriptSourceMaps</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a></code> | A structure that contains the configuration for how an app monitor can unminify JavaScript error stack traces using source maps. |

---

##### `JavaScriptSourceMaps`<sup>Optional</sup> <a name="JavaScriptSourceMaps" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfiguration.property.javaScriptSourceMaps"></a>

```go
JavaScriptSourceMaps RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a>

A structure that contains the configuration for how an app monitor can unminify JavaScript error stack traces using source maps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#java_script_source_maps RumAppMonitor#java_script_source_maps}

---

### RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps <a name="RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

&rumappmonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps {
	S3Uri: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.property.s3Uri">S3Uri</a></code> | <code>*string</code> | The S3Uri of the bucket or folder that stores the source map files. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.property.status">Status</a></code> | <code>*string</code> | Specifies whether JavaScript error stack traces should be unminified for this app monitor. |

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

The S3Uri of the bucket or folder that stores the source map files.

It is required if status is ENABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#s3_uri RumAppMonitor#s3_uri}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.property.status"></a>

```go
Status *string
```

- *Type:* *string

Specifies whether JavaScript error stack traces should be unminified for this app monitor.

The default is for JavaScript error stack trace unminification to be DISABLED

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#status RumAppMonitor#status}

---

### RumAppMonitorResourcePolicy <a name="RumAppMonitorResourcePolicy" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

&rumappmonitor.RumAppMonitorResourcePolicy {
	PolicyDocument: *string,
	PolicyRevisionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | The JSON to use as the resource policy. The document can be up to 4 KB in size. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy.property.policyRevisionId">PolicyRevisionId</a></code> | <code>*string</code> | A string value that you can use to conditionally update your policy. |

---

##### `PolicyDocument`<sup>Optional</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy.property.policyDocument"></a>

```go
PolicyDocument *string
```

- *Type:* *string

The JSON to use as the resource policy. The document can be up to 4 KB in size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#policy_document RumAppMonitor#policy_document}

---

##### `PolicyRevisionId`<sup>Optional</sup> <a name="PolicyRevisionId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicy.property.policyRevisionId"></a>

```go
PolicyRevisionId *string
```

- *Type:* *string

A string value that you can use to conditionally update your policy.

You can provide the revision ID of your existing policy to make mutating requests against that policy.

When you assign a policy revision ID, then later requests about that policy will be rejected with an InvalidPolicyRevisionIdException error if they don't provide the correct current revision ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#policy_revision_id RumAppMonitor#policy_revision_id}

---

### RumAppMonitorTags <a name="RumAppMonitorTags" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

&rumappmonitor.RumAppMonitorTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#key RumAppMonitor#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rum_app_monitor#value RumAppMonitor#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RumAppMonitorAppMonitorConfigurationMetricDestinationsList <a name="RumAppMonitorAppMonitorConfigurationMetricDestinationsList" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

rumappmonitor.NewRumAppMonitorAppMonitorConfigurationMetricDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RumAppMonitorAppMonitorConfigurationMetricDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.get"></a>

```go
func Get(index *f64) RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList <a name="RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

rumappmonitor.NewRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.get"></a>

```go
func Get(index *f64) RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference <a name="RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

rumappmonitor.NewRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetDimensionKeys">ResetDimensionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetEventPattern">ResetEventPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetUnitLabel">ResetUnitLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetValueKey">ResetValueKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDimensionKeys` <a name="ResetDimensionKeys" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetDimensionKeys"></a>

```go
func ResetDimensionKeys()
```

##### `ResetEventPattern` <a name="ResetEventPattern" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetEventPattern"></a>

```go
func ResetEventPattern()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetUnitLabel` <a name="ResetUnitLabel" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetUnitLabel"></a>

```go
func ResetUnitLabel()
```

##### `ResetValueKey` <a name="ResetValueKey" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resetValueKey"></a>

```go
func ResetValueKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.dimensionKeysInput">DimensionKeysInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.eventPatternInput">EventPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.unitLabelInput">UnitLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.valueKeyInput">ValueKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.dimensionKeys">DimensionKeys</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.eventPattern">EventPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.unitLabel">UnitLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.valueKey">ValueKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DimensionKeysInput`<sup>Optional</sup> <a name="DimensionKeysInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.dimensionKeysInput"></a>

```go
func DimensionKeysInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EventPatternInput`<sup>Optional</sup> <a name="EventPatternInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.eventPatternInput"></a>

```go
func EventPatternInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `UnitLabelInput`<sup>Optional</sup> <a name="UnitLabelInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.unitLabelInput"></a>

```go
func UnitLabelInput() *string
```

- *Type:* *string

---

##### `ValueKeyInput`<sup>Optional</sup> <a name="ValueKeyInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.valueKeyInput"></a>

```go
func ValueKeyInput() *string
```

- *Type:* *string

---

##### `DimensionKeys`<sup>Required</sup> <a name="DimensionKeys" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.dimensionKeys"></a>

```go
func DimensionKeys() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EventPattern`<sup>Required</sup> <a name="EventPattern" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.eventPattern"></a>

```go
func EventPattern() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `UnitLabel`<sup>Required</sup> <a name="UnitLabel" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.unitLabel"></a>

```go
func UnitLabel() *string
```

- *Type:* *string

---

##### `ValueKey`<sup>Required</sup> <a name="ValueKey" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.valueKey"></a>

```go
func ValueKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference <a name="RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

rumappmonitor.NewRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.putMetricDefinitions">PutMetricDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetDestinationArn">ResetDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetIamRoleArn">ResetIamRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetMetricDefinitions">ResetMetricDefinitions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetricDefinitions` <a name="PutMetricDefinitions" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.putMetricDefinitions"></a>

```go
func PutMetricDefinitions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.putMetricDefinitions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestination` <a name="ResetDestination" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetDestinationArn` <a name="ResetDestinationArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetDestinationArn"></a>

```go
func ResetDestinationArn()
```

##### `ResetIamRoleArn` <a name="ResetIamRoleArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetIamRoleArn"></a>

```go
func ResetIamRoleArn()
```

##### `ResetMetricDefinitions` <a name="ResetMetricDefinitions" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resetMetricDefinitions"></a>

```go
func ResetMetricDefinitions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.metricDefinitions">MetricDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationArnInput">DestinationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.metricDefinitionsInput">MetricDefinitionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationArn">DestinationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricDefinitions`<sup>Required</sup> <a name="MetricDefinitions" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.metricDefinitions"></a>

```go
func MetricDefinitions() RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList">RumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList</a>

---

##### `DestinationArnInput`<sup>Optional</sup> <a name="DestinationArnInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationArnInput"></a>

```go
func DestinationArnInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.iamRoleArnInput"></a>

```go
func IamRoleArnInput() *string
```

- *Type:* *string

---

##### `MetricDefinitionsInput`<sup>Optional</sup> <a name="MetricDefinitionsInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.metricDefinitionsInput"></a>

```go
func MetricDefinitionsInput() interface{}
```

- *Type:* interface{}

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationArn"></a>

```go
func DestinationArn() *string
```

- *Type:* *string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RumAppMonitorAppMonitorConfigurationOutputReference <a name="RumAppMonitorAppMonitorConfigurationOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

rumappmonitor.NewRumAppMonitorAppMonitorConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RumAppMonitorAppMonitorConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.putMetricDestinations">PutMetricDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetAllowCookies">ResetAllowCookies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetEnableXRay">ResetEnableXRay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetExcludedPages">ResetExcludedPages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetFavoritePages">ResetFavoritePages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetGuestRoleArn">ResetGuestRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIdentityPoolId">ResetIdentityPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIncludedPages">ResetIncludedPages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetMetricDestinations">ResetMetricDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetSessionSampleRate">ResetSessionSampleRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetTelemetries">ResetTelemetries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetricDestinations` <a name="PutMetricDestinations" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.putMetricDestinations"></a>

```go
func PutMetricDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.putMetricDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowCookies` <a name="ResetAllowCookies" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetAllowCookies"></a>

```go
func ResetAllowCookies()
```

##### `ResetEnableXRay` <a name="ResetEnableXRay" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetEnableXRay"></a>

```go
func ResetEnableXRay()
```

##### `ResetExcludedPages` <a name="ResetExcludedPages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetExcludedPages"></a>

```go
func ResetExcludedPages()
```

##### `ResetFavoritePages` <a name="ResetFavoritePages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetFavoritePages"></a>

```go
func ResetFavoritePages()
```

##### `ResetGuestRoleArn` <a name="ResetGuestRoleArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetGuestRoleArn"></a>

```go
func ResetGuestRoleArn()
```

##### `ResetIdentityPoolId` <a name="ResetIdentityPoolId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIdentityPoolId"></a>

```go
func ResetIdentityPoolId()
```

##### `ResetIncludedPages` <a name="ResetIncludedPages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetIncludedPages"></a>

```go
func ResetIncludedPages()
```

##### `ResetMetricDestinations` <a name="ResetMetricDestinations" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetMetricDestinations"></a>

```go
func ResetMetricDestinations()
```

##### `ResetSessionSampleRate` <a name="ResetSessionSampleRate" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetSessionSampleRate"></a>

```go
func ResetSessionSampleRate()
```

##### `ResetTelemetries` <a name="ResetTelemetries" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.resetTelemetries"></a>

```go
func ResetTelemetries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.metricDestinations">MetricDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList">RumAppMonitorAppMonitorConfigurationMetricDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookiesInput">AllowCookiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXRayInput">EnableXRayInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPagesInput">ExcludedPagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePagesInput">FavoritePagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArnInput">GuestRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolIdInput">IdentityPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPagesInput">IncludedPagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.metricDestinationsInput">MetricDestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRateInput">SessionSampleRateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetriesInput">TelemetriesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookies">AllowCookies</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXRay">EnableXRay</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPages">ExcludedPages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePages">FavoritePages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArn">GuestRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolId">IdentityPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPages">IncludedPages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRate">SessionSampleRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetries">Telemetries</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricDestinations`<sup>Required</sup> <a name="MetricDestinations" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.metricDestinations"></a>

```go
func MetricDestinations() RumAppMonitorAppMonitorConfigurationMetricDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationMetricDestinationsList">RumAppMonitorAppMonitorConfigurationMetricDestinationsList</a>

---

##### `AllowCookiesInput`<sup>Optional</sup> <a name="AllowCookiesInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookiesInput"></a>

```go
func AllowCookiesInput() interface{}
```

- *Type:* interface{}

---

##### `EnableXRayInput`<sup>Optional</sup> <a name="EnableXRayInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXRayInput"></a>

```go
func EnableXRayInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludedPagesInput`<sup>Optional</sup> <a name="ExcludedPagesInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPagesInput"></a>

```go
func ExcludedPagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FavoritePagesInput`<sup>Optional</sup> <a name="FavoritePagesInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePagesInput"></a>

```go
func FavoritePagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `GuestRoleArnInput`<sup>Optional</sup> <a name="GuestRoleArnInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArnInput"></a>

```go
func GuestRoleArnInput() *string
```

- *Type:* *string

---

##### `IdentityPoolIdInput`<sup>Optional</sup> <a name="IdentityPoolIdInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolIdInput"></a>

```go
func IdentityPoolIdInput() *string
```

- *Type:* *string

---

##### `IncludedPagesInput`<sup>Optional</sup> <a name="IncludedPagesInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPagesInput"></a>

```go
func IncludedPagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `MetricDestinationsInput`<sup>Optional</sup> <a name="MetricDestinationsInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.metricDestinationsInput"></a>

```go
func MetricDestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `SessionSampleRateInput`<sup>Optional</sup> <a name="SessionSampleRateInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRateInput"></a>

```go
func SessionSampleRateInput() *f64
```

- *Type:* *f64

---

##### `TelemetriesInput`<sup>Optional</sup> <a name="TelemetriesInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetriesInput"></a>

```go
func TelemetriesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowCookies`<sup>Required</sup> <a name="AllowCookies" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookies"></a>

```go
func AllowCookies() interface{}
```

- *Type:* interface{}

---

##### `EnableXRay`<sup>Required</sup> <a name="EnableXRay" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.enableXRay"></a>

```go
func EnableXRay() interface{}
```

- *Type:* interface{}

---

##### `ExcludedPages`<sup>Required</sup> <a name="ExcludedPages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPages"></a>

```go
func ExcludedPages() *[]*string
```

- *Type:* *[]*string

---

##### `FavoritePages`<sup>Required</sup> <a name="FavoritePages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePages"></a>

```go
func FavoritePages() *[]*string
```

- *Type:* *[]*string

---

##### `GuestRoleArn`<sup>Required</sup> <a name="GuestRoleArn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArn"></a>

```go
func GuestRoleArn() *string
```

- *Type:* *string

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolId"></a>

```go
func IdentityPoolId() *string
```

- *Type:* *string

---

##### `IncludedPages`<sup>Required</sup> <a name="IncludedPages" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.includedPages"></a>

```go
func IncludedPages() *[]*string
```

- *Type:* *[]*string

---

##### `SessionSampleRate`<sup>Required</sup> <a name="SessionSampleRate" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRate"></a>

```go
func SessionSampleRate() *f64
```

- *Type:* *f64

---

##### `Telemetries`<sup>Required</sup> <a name="Telemetries" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.telemetries"></a>

```go
func Telemetries() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorAppMonitorConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RumAppMonitorCustomEventsOutputReference <a name="RumAppMonitorCustomEventsOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

rumappmonitor.NewRumAppMonitorCustomEventsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RumAppMonitorCustomEventsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorCustomEventsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference <a name="RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

rumappmonitor.NewRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resetS3Uri"></a>

```go
func ResetS3Uri()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RumAppMonitorDeobfuscationConfigurationOutputReference <a name="RumAppMonitorDeobfuscationConfigurationOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

rumappmonitor.NewRumAppMonitorDeobfuscationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RumAppMonitorDeobfuscationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.putJavaScriptSourceMaps">PutJavaScriptSourceMaps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.resetJavaScriptSourceMaps">ResetJavaScriptSourceMaps</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJavaScriptSourceMaps` <a name="PutJavaScriptSourceMaps" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.putJavaScriptSourceMaps"></a>

```go
func PutJavaScriptSourceMaps(value RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.putJavaScriptSourceMaps.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a>

---

##### `ResetJavaScriptSourceMaps` <a name="ResetJavaScriptSourceMaps" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.resetJavaScriptSourceMaps"></a>

```go
func ResetJavaScriptSourceMaps()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.javaScriptSourceMaps">JavaScriptSourceMaps</a></code> | <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.javaScriptSourceMapsInput">JavaScriptSourceMapsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JavaScriptSourceMaps`<sup>Required</sup> <a name="JavaScriptSourceMaps" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.javaScriptSourceMaps"></a>

```go
func JavaScriptSourceMaps() RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference">RumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference</a>

---

##### `JavaScriptSourceMapsInput`<sup>Optional</sup> <a name="JavaScriptSourceMapsInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.javaScriptSourceMapsInput"></a>

```go
func JavaScriptSourceMapsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorDeobfuscationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RumAppMonitorResourcePolicyOutputReference <a name="RumAppMonitorResourcePolicyOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

rumappmonitor.NewRumAppMonitorResourcePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RumAppMonitorResourcePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resetPolicyDocument">ResetPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resetPolicyRevisionId">ResetPolicyRevisionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPolicyDocument` <a name="ResetPolicyDocument" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resetPolicyDocument"></a>

```go
func ResetPolicyDocument()
```

##### `ResetPolicyRevisionId` <a name="ResetPolicyRevisionId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.resetPolicyRevisionId"></a>

```go
func ResetPolicyRevisionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyDocumentInput">PolicyDocumentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyRevisionIdInput">PolicyRevisionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyRevisionId">PolicyRevisionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyDocumentInput`<sup>Optional</sup> <a name="PolicyDocumentInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyDocumentInput"></a>

```go
func PolicyDocumentInput() *string
```

- *Type:* *string

---

##### `PolicyRevisionIdInput`<sup>Optional</sup> <a name="PolicyRevisionIdInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyRevisionIdInput"></a>

```go
func PolicyRevisionIdInput() *string
```

- *Type:* *string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyDocument"></a>

```go
func PolicyDocument() *string
```

- *Type:* *string

---

##### `PolicyRevisionId`<sup>Required</sup> <a name="PolicyRevisionId" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.policyRevisionId"></a>

```go
func PolicyRevisionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorResourcePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RumAppMonitorTagsList <a name="RumAppMonitorTagsList" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

rumappmonitor.NewRumAppMonitorTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RumAppMonitorTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.get"></a>

```go
func Get(index *f64) RumAppMonitorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RumAppMonitorTagsOutputReference <a name="RumAppMonitorTagsOutputReference" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rumappmonitor"

rumappmonitor.NewRumAppMonitorTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RumAppMonitorTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rumAppMonitor.RumAppMonitorTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



