# `internetmonitorMonitor` Submodule <a name="`internetmonitorMonitor` Submodule" id="@cdktn/provider-awscc.internetmonitorMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InternetmonitorMonitor <a name="InternetmonitorMonitor" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor awscc_internetmonitor_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/internetmonitormonitor"

internetmonitormonitor.NewInternetmonitorMonitor(scope Construct, id *string, config InternetmonitorMonitorConfig) InternetmonitorMonitor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig">InternetmonitorMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig">InternetmonitorMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putHealthEventsConfig">PutHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putInternetMeasurementsLogDelivery">PutInternetMeasurementsLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetHealthEventsConfig">ResetHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetIncludeLinkedAccounts">ResetIncludeLinkedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetInternetMeasurementsLogDelivery">ResetInternetMeasurementsLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetLinkedAccountId">ResetLinkedAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetMaxCityNetworksToMonitor">ResetMaxCityNetworksToMonitor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetResourcesToAdd">ResetResourcesToAdd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetResourcesToRemove">ResetResourcesToRemove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetTrafficPercentageToMonitor">ResetTrafficPercentageToMonitor</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHealthEventsConfig` <a name="PutHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putHealthEventsConfig"></a>

```go
func PutHealthEventsConfig(value InternetmonitorMonitorHealthEventsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putHealthEventsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a>

---

##### `PutInternetMeasurementsLogDelivery` <a name="PutInternetMeasurementsLogDelivery" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putInternetMeasurementsLogDelivery"></a>

```go
func PutInternetMeasurementsLogDelivery(value InternetmonitorMonitorInternetMeasurementsLogDelivery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putInternetMeasurementsLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHealthEventsConfig` <a name="ResetHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetHealthEventsConfig"></a>

```go
func ResetHealthEventsConfig()
```

##### `ResetIncludeLinkedAccounts` <a name="ResetIncludeLinkedAccounts" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetIncludeLinkedAccounts"></a>

```go
func ResetIncludeLinkedAccounts()
```

##### `ResetInternetMeasurementsLogDelivery` <a name="ResetInternetMeasurementsLogDelivery" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetInternetMeasurementsLogDelivery"></a>

```go
func ResetInternetMeasurementsLogDelivery()
```

##### `ResetLinkedAccountId` <a name="ResetLinkedAccountId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetLinkedAccountId"></a>

```go
func ResetLinkedAccountId()
```

##### `ResetMaxCityNetworksToMonitor` <a name="ResetMaxCityNetworksToMonitor" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetMaxCityNetworksToMonitor"></a>

```go
func ResetMaxCityNetworksToMonitor()
```

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetResources"></a>

```go
func ResetResources()
```

##### `ResetResourcesToAdd` <a name="ResetResourcesToAdd" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetResourcesToAdd"></a>

```go
func ResetResourcesToAdd()
```

##### `ResetResourcesToRemove` <a name="ResetResourcesToRemove" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetResourcesToRemove"></a>

```go
func ResetResourcesToRemove()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTrafficPercentageToMonitor` <a name="ResetTrafficPercentageToMonitor" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.resetTrafficPercentageToMonitor"></a>

```go
func ResetTrafficPercentageToMonitor()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a InternetmonitorMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/internetmonitormonitor"

internetmonitormonitor.InternetmonitorMonitor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/internetmonitormonitor"

internetmonitormonitor.InternetmonitorMonitor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/internetmonitormonitor"

internetmonitormonitor.InternetmonitorMonitor_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/internetmonitormonitor"

internetmonitormonitor.InternetmonitorMonitor_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a InternetmonitorMonitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the InternetmonitorMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing InternetmonitorMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the InternetmonitorMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfig">HealthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDelivery">InternetMeasurementsLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.monitorArn">MonitorArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.processingStatus">ProcessingStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.processingStatusInfo">ProcessingStatusInfo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList">InternetmonitorMonitorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfigInput">HealthEventsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.includeLinkedAccountsInput">IncludeLinkedAccountsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDeliveryInput">InternetMeasurementsLogDeliveryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.linkedAccountIdInput">LinkedAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitorInput">MaxCityNetworksToMonitorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.monitorNameInput">MonitorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToAddInput">ResourcesToAddInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToRemoveInput">ResourcesToRemoveInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitorInput">TrafficPercentageToMonitorInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.includeLinkedAccounts">IncludeLinkedAccounts</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.linkedAccountId">LinkedAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitor">MaxCityNetworksToMonitor</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.monitorName">MonitorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToAdd">ResourcesToAdd</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToRemove">ResourcesToRemove</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitor">TrafficPercentageToMonitor</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `HealthEventsConfig`<sup>Required</sup> <a name="HealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfig"></a>

```go
func HealthEventsConfig() InternetmonitorMonitorHealthEventsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternetMeasurementsLogDelivery`<sup>Required</sup> <a name="InternetMeasurementsLogDelivery" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDelivery"></a>

```go
func InternetMeasurementsLogDelivery() InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `MonitorArn`<sup>Required</sup> <a name="MonitorArn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.monitorArn"></a>

```go
func MonitorArn() *string
```

- *Type:* *string

---

##### `ProcessingStatus`<sup>Required</sup> <a name="ProcessingStatus" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.processingStatus"></a>

```go
func ProcessingStatus() *string
```

- *Type:* *string

---

##### `ProcessingStatusInfo`<sup>Required</sup> <a name="ProcessingStatusInfo" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.processingStatusInfo"></a>

```go
func ProcessingStatusInfo() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.tags"></a>

```go
func Tags() InternetmonitorMonitorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList">InternetmonitorMonitorTagsList</a>

---

##### `HealthEventsConfigInput`<sup>Optional</sup> <a name="HealthEventsConfigInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.healthEventsConfigInput"></a>

```go
func HealthEventsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeLinkedAccountsInput`<sup>Optional</sup> <a name="IncludeLinkedAccountsInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.includeLinkedAccountsInput"></a>

```go
func IncludeLinkedAccountsInput() interface{}
```

- *Type:* interface{}

---

##### `InternetMeasurementsLogDeliveryInput`<sup>Optional</sup> <a name="InternetMeasurementsLogDeliveryInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.internetMeasurementsLogDeliveryInput"></a>

```go
func InternetMeasurementsLogDeliveryInput() interface{}
```

- *Type:* interface{}

---

##### `LinkedAccountIdInput`<sup>Optional</sup> <a name="LinkedAccountIdInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.linkedAccountIdInput"></a>

```go
func LinkedAccountIdInput() *string
```

- *Type:* *string

---

##### `MaxCityNetworksToMonitorInput`<sup>Optional</sup> <a name="MaxCityNetworksToMonitorInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitorInput"></a>

```go
func MaxCityNetworksToMonitorInput() *f64
```

- *Type:* *f64

---

##### `MonitorNameInput`<sup>Optional</sup> <a name="MonitorNameInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.monitorNameInput"></a>

```go
func MonitorNameInput() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourcesToAddInput`<sup>Optional</sup> <a name="ResourcesToAddInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToAddInput"></a>

```go
func ResourcesToAddInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourcesToRemoveInput`<sup>Optional</sup> <a name="ResourcesToRemoveInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToRemoveInput"></a>

```go
func ResourcesToRemoveInput() *[]*string
```

- *Type:* *[]*string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TrafficPercentageToMonitorInput`<sup>Optional</sup> <a name="TrafficPercentageToMonitorInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitorInput"></a>

```go
func TrafficPercentageToMonitorInput() *f64
```

- *Type:* *f64

---

##### `IncludeLinkedAccounts`<sup>Required</sup> <a name="IncludeLinkedAccounts" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.includeLinkedAccounts"></a>

```go
func IncludeLinkedAccounts() interface{}
```

- *Type:* interface{}

---

##### `LinkedAccountId`<sup>Required</sup> <a name="LinkedAccountId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.linkedAccountId"></a>

```go
func LinkedAccountId() *string
```

- *Type:* *string

---

##### `MaxCityNetworksToMonitor`<sup>Required</sup> <a name="MaxCityNetworksToMonitor" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.maxCityNetworksToMonitor"></a>

```go
func MaxCityNetworksToMonitor() *f64
```

- *Type:* *f64

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.monitorName"></a>

```go
func MonitorName() *string
```

- *Type:* *string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `ResourcesToAdd`<sup>Required</sup> <a name="ResourcesToAdd" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToAdd"></a>

```go
func ResourcesToAdd() *[]*string
```

- *Type:* *[]*string

---

##### `ResourcesToRemove`<sup>Required</sup> <a name="ResourcesToRemove" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.resourcesToRemove"></a>

```go
func ResourcesToRemove() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TrafficPercentageToMonitor`<sup>Required</sup> <a name="TrafficPercentageToMonitor" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.trafficPercentageToMonitor"></a>

```go
func TrafficPercentageToMonitor() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### InternetmonitorMonitorConfig <a name="InternetmonitorMonitorConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/internetmonitormonitor"

&internetmonitormonitor.InternetmonitorMonitorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	MonitorName: *string,
	HealthEventsConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig,
	IncludeLinkedAccounts: interface{},
	InternetMeasurementsLogDelivery: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery,
	LinkedAccountId: *string,
	MaxCityNetworksToMonitor: *f64,
	Resources: *[]*string,
	ResourcesToAdd: *[]*string,
	ResourcesToRemove: *[]*string,
	Status: *string,
	Tags: interface{},
	TrafficPercentageToMonitor: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.monitorName">MonitorName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#monitor_name InternetmonitorMonitor#monitor_name}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.healthEventsConfig">HealthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#health_events_config InternetmonitorMonitor#health_events_config}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.includeLinkedAccounts">IncludeLinkedAccounts</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#include_linked_accounts InternetmonitorMonitor#include_linked_accounts}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.internetMeasurementsLogDelivery">InternetMeasurementsLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#internet_measurements_log_delivery InternetmonitorMonitor#internet_measurements_log_delivery}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.linkedAccountId">LinkedAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#linked_account_id InternetmonitorMonitor#linked_account_id}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.maxCityNetworksToMonitor">MaxCityNetworksToMonitor</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#max_city_networks_to_monitor InternetmonitorMonitor#max_city_networks_to_monitor}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resources">Resources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#resources InternetmonitorMonitor#resources}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resourcesToAdd">ResourcesToAdd</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#resources_to_add InternetmonitorMonitor#resources_to_add}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resourcesToRemove">ResourcesToRemove</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#resources_to_remove InternetmonitorMonitor#resources_to_remove}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#tags InternetmonitorMonitor#tags}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.trafficPercentageToMonitor">TrafficPercentageToMonitor</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#traffic_percentage_to_monitor InternetmonitorMonitor#traffic_percentage_to_monitor}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.monitorName"></a>

```go
MonitorName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#monitor_name InternetmonitorMonitor#monitor_name}.

---

##### `HealthEventsConfig`<sup>Optional</sup> <a name="HealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.healthEventsConfig"></a>

```go
HealthEventsConfig InternetmonitorMonitorHealthEventsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig">InternetmonitorMonitorHealthEventsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#health_events_config InternetmonitorMonitor#health_events_config}.

---

##### `IncludeLinkedAccounts`<sup>Optional</sup> <a name="IncludeLinkedAccounts" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.includeLinkedAccounts"></a>

```go
IncludeLinkedAccounts interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#include_linked_accounts InternetmonitorMonitor#include_linked_accounts}.

---

##### `InternetMeasurementsLogDelivery`<sup>Optional</sup> <a name="InternetMeasurementsLogDelivery" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.internetMeasurementsLogDelivery"></a>

```go
InternetMeasurementsLogDelivery InternetmonitorMonitorInternetMeasurementsLogDelivery
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery">InternetmonitorMonitorInternetMeasurementsLogDelivery</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#internet_measurements_log_delivery InternetmonitorMonitor#internet_measurements_log_delivery}.

---

##### `LinkedAccountId`<sup>Optional</sup> <a name="LinkedAccountId" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.linkedAccountId"></a>

```go
LinkedAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#linked_account_id InternetmonitorMonitor#linked_account_id}.

---

##### `MaxCityNetworksToMonitor`<sup>Optional</sup> <a name="MaxCityNetworksToMonitor" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.maxCityNetworksToMonitor"></a>

```go
MaxCityNetworksToMonitor *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#max_city_networks_to_monitor InternetmonitorMonitor#max_city_networks_to_monitor}.

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#resources InternetmonitorMonitor#resources}.

---

##### `ResourcesToAdd`<sup>Optional</sup> <a name="ResourcesToAdd" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resourcesToAdd"></a>

```go
ResourcesToAdd *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#resources_to_add InternetmonitorMonitor#resources_to_add}.

---

##### `ResourcesToRemove`<sup>Optional</sup> <a name="ResourcesToRemove" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.resourcesToRemove"></a>

```go
ResourcesToRemove *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#resources_to_remove InternetmonitorMonitor#resources_to_remove}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#tags InternetmonitorMonitor#tags}.

---

##### `TrafficPercentageToMonitor`<sup>Optional</sup> <a name="TrafficPercentageToMonitor" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorConfig.property.trafficPercentageToMonitor"></a>

```go
TrafficPercentageToMonitor *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#traffic_percentage_to_monitor InternetmonitorMonitor#traffic_percentage_to_monitor}.

---

### InternetmonitorMonitorHealthEventsConfig <a name="InternetmonitorMonitorHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/internetmonitormonitor"

&internetmonitormonitor.InternetmonitorMonitorHealthEventsConfig {
	AvailabilityLocalHealthEventsConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig,
	AvailabilityScoreThreshold: *f64,
	PerformanceLocalHealthEventsConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig,
	PerformanceScoreThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.availabilityLocalHealthEventsConfig">AvailabilityLocalHealthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#availability_local_health_events_config InternetmonitorMonitor#availability_local_health_events_config}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.availabilityScoreThreshold">AvailabilityScoreThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#availability_score_threshold InternetmonitorMonitor#availability_score_threshold}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.performanceLocalHealthEventsConfig">PerformanceLocalHealthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#performance_local_health_events_config InternetmonitorMonitor#performance_local_health_events_config}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.performanceScoreThreshold">PerformanceScoreThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#performance_score_threshold InternetmonitorMonitor#performance_score_threshold}. |

---

##### `AvailabilityLocalHealthEventsConfig`<sup>Optional</sup> <a name="AvailabilityLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.availabilityLocalHealthEventsConfig"></a>

```go
AvailabilityLocalHealthEventsConfig InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#availability_local_health_events_config InternetmonitorMonitor#availability_local_health_events_config}.

---

##### `AvailabilityScoreThreshold`<sup>Optional</sup> <a name="AvailabilityScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.availabilityScoreThreshold"></a>

```go
AvailabilityScoreThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#availability_score_threshold InternetmonitorMonitor#availability_score_threshold}.

---

##### `PerformanceLocalHealthEventsConfig`<sup>Optional</sup> <a name="PerformanceLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.performanceLocalHealthEventsConfig"></a>

```go
PerformanceLocalHealthEventsConfig InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#performance_local_health_events_config InternetmonitorMonitor#performance_local_health_events_config}.

---

##### `PerformanceScoreThreshold`<sup>Optional</sup> <a name="PerformanceScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfig.property.performanceScoreThreshold"></a>

```go
PerformanceScoreThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#performance_score_threshold InternetmonitorMonitor#performance_score_threshold}.

---

### InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig <a name="InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/internetmonitormonitor"

&internetmonitormonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig {
	HealthScoreThreshold: *f64,
	MinTrafficImpact: *f64,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.property.healthScoreThreshold">HealthScoreThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#health_score_threshold InternetmonitorMonitor#health_score_threshold}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.property.minTrafficImpact">MinTrafficImpact</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#min_traffic_impact InternetmonitorMonitor#min_traffic_impact}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}. |

---

##### `HealthScoreThreshold`<sup>Optional</sup> <a name="HealthScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.property.healthScoreThreshold"></a>

```go
HealthScoreThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#health_score_threshold InternetmonitorMonitor#health_score_threshold}.

---

##### `MinTrafficImpact`<sup>Optional</sup> <a name="MinTrafficImpact" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.property.minTrafficImpact"></a>

```go
MinTrafficImpact *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#min_traffic_impact InternetmonitorMonitor#min_traffic_impact}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}.

---

### InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig <a name="InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/internetmonitormonitor"

&internetmonitormonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig {
	HealthScoreThreshold: *f64,
	MinTrafficImpact: *f64,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.property.healthScoreThreshold">HealthScoreThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#health_score_threshold InternetmonitorMonitor#health_score_threshold}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.property.minTrafficImpact">MinTrafficImpact</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#min_traffic_impact InternetmonitorMonitor#min_traffic_impact}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}. |

---

##### `HealthScoreThreshold`<sup>Optional</sup> <a name="HealthScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.property.healthScoreThreshold"></a>

```go
HealthScoreThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#health_score_threshold InternetmonitorMonitor#health_score_threshold}.

---

##### `MinTrafficImpact`<sup>Optional</sup> <a name="MinTrafficImpact" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.property.minTrafficImpact"></a>

```go
MinTrafficImpact *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#min_traffic_impact InternetmonitorMonitor#min_traffic_impact}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#status InternetmonitorMonitor#status}.

---

### InternetmonitorMonitorInternetMeasurementsLogDelivery <a name="InternetmonitorMonitorInternetMeasurementsLogDelivery" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/internetmonitormonitor"

&internetmonitormonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery {
	S3Config: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery.property.s3Config">S3Config</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#s3_config InternetmonitorMonitor#s3_config}. |

---

##### `S3Config`<sup>Optional</sup> <a name="S3Config" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDelivery.property.s3Config"></a>

```go
S3Config InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#s3_config InternetmonitorMonitor#s3_config}.

---

### InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config <a name="InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/internetmonitormonitor"

&internetmonitormonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config {
	BucketName: *string,
	BucketPrefix: *string,
	LogDeliveryStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#bucket_name InternetmonitorMonitor#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketPrefix">BucketPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#bucket_prefix InternetmonitorMonitor#bucket_prefix}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.logDeliveryStatus">LogDeliveryStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#log_delivery_status InternetmonitorMonitor#log_delivery_status}. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#bucket_name InternetmonitorMonitor#bucket_name}.

---

##### `BucketPrefix`<sup>Optional</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.bucketPrefix"></a>

```go
BucketPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#bucket_prefix InternetmonitorMonitor#bucket_prefix}.

---

##### `LogDeliveryStatus`<sup>Optional</sup> <a name="LogDeliveryStatus" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.property.logDeliveryStatus"></a>

```go
LogDeliveryStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#log_delivery_status InternetmonitorMonitor#log_delivery_status}.

---

### InternetmonitorMonitorTags <a name="InternetmonitorMonitorTags" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/internetmonitormonitor"

&internetmonitormonitor.InternetmonitorMonitorTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#key InternetmonitorMonitor#key}. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#value InternetmonitorMonitor#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#key InternetmonitorMonitor#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/internetmonitor_monitor#value InternetmonitorMonitor#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference <a name="InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/internetmonitormonitor"

internetmonitormonitor.NewInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resetHealthScoreThreshold">ResetHealthScoreThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resetMinTrafficImpact">ResetMinTrafficImpact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHealthScoreThreshold` <a name="ResetHealthScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resetHealthScoreThreshold"></a>

```go
func ResetHealthScoreThreshold()
```

##### `ResetMinTrafficImpact` <a name="ResetMinTrafficImpact" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resetMinTrafficImpact"></a>

```go
func ResetMinTrafficImpact()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.healthScoreThresholdInput">HealthScoreThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.minTrafficImpactInput">MinTrafficImpactInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.healthScoreThreshold">HealthScoreThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.minTrafficImpact">MinTrafficImpact</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HealthScoreThresholdInput`<sup>Optional</sup> <a name="HealthScoreThresholdInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.healthScoreThresholdInput"></a>

```go
func HealthScoreThresholdInput() *f64
```

- *Type:* *f64

---

##### `MinTrafficImpactInput`<sup>Optional</sup> <a name="MinTrafficImpactInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.minTrafficImpactInput"></a>

```go
func MinTrafficImpactInput() *f64
```

- *Type:* *f64

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `HealthScoreThreshold`<sup>Required</sup> <a name="HealthScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.healthScoreThreshold"></a>

```go
func HealthScoreThreshold() *f64
```

- *Type:* *f64

---

##### `MinTrafficImpact`<sup>Required</sup> <a name="MinTrafficImpact" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.minTrafficImpact"></a>

```go
func MinTrafficImpact() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### InternetmonitorMonitorHealthEventsConfigOutputReference <a name="InternetmonitorMonitorHealthEventsConfigOutputReference" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/internetmonitormonitor"

internetmonitormonitor.NewInternetmonitorMonitorHealthEventsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InternetmonitorMonitorHealthEventsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.putAvailabilityLocalHealthEventsConfig">PutAvailabilityLocalHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.putPerformanceLocalHealthEventsConfig">PutPerformanceLocalHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetAvailabilityLocalHealthEventsConfig">ResetAvailabilityLocalHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetAvailabilityScoreThreshold">ResetAvailabilityScoreThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetPerformanceLocalHealthEventsConfig">ResetPerformanceLocalHealthEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetPerformanceScoreThreshold">ResetPerformanceScoreThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAvailabilityLocalHealthEventsConfig` <a name="PutAvailabilityLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.putAvailabilityLocalHealthEventsConfig"></a>

```go
func PutAvailabilityLocalHealthEventsConfig(value InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.putAvailabilityLocalHealthEventsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig</a>

---

##### `PutPerformanceLocalHealthEventsConfig` <a name="PutPerformanceLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.putPerformanceLocalHealthEventsConfig"></a>

```go
func PutPerformanceLocalHealthEventsConfig(value InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.putPerformanceLocalHealthEventsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig</a>

---

##### `ResetAvailabilityLocalHealthEventsConfig` <a name="ResetAvailabilityLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetAvailabilityLocalHealthEventsConfig"></a>

```go
func ResetAvailabilityLocalHealthEventsConfig()
```

##### `ResetAvailabilityScoreThreshold` <a name="ResetAvailabilityScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetAvailabilityScoreThreshold"></a>

```go
func ResetAvailabilityScoreThreshold()
```

##### `ResetPerformanceLocalHealthEventsConfig` <a name="ResetPerformanceLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetPerformanceLocalHealthEventsConfig"></a>

```go
func ResetPerformanceLocalHealthEventsConfig()
```

##### `ResetPerformanceScoreThreshold` <a name="ResetPerformanceScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.resetPerformanceScoreThreshold"></a>

```go
func ResetPerformanceScoreThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityLocalHealthEventsConfig">AvailabilityLocalHealthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceLocalHealthEventsConfig">PerformanceLocalHealthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityLocalHealthEventsConfigInput">AvailabilityLocalHealthEventsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThresholdInput">AvailabilityScoreThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceLocalHealthEventsConfigInput">PerformanceLocalHealthEventsConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThresholdInput">PerformanceScoreThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThreshold">AvailabilityScoreThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThreshold">PerformanceScoreThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityLocalHealthEventsConfig`<sup>Required</sup> <a name="AvailabilityLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityLocalHealthEventsConfig"></a>

```go
func AvailabilityLocalHealthEventsConfig() InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference</a>

---

##### `PerformanceLocalHealthEventsConfig`<sup>Required</sup> <a name="PerformanceLocalHealthEventsConfig" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceLocalHealthEventsConfig"></a>

```go
func PerformanceLocalHealthEventsConfig() InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference">InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference</a>

---

##### `AvailabilityLocalHealthEventsConfigInput`<sup>Optional</sup> <a name="AvailabilityLocalHealthEventsConfigInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityLocalHealthEventsConfigInput"></a>

```go
func AvailabilityLocalHealthEventsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityScoreThresholdInput`<sup>Optional</sup> <a name="AvailabilityScoreThresholdInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThresholdInput"></a>

```go
func AvailabilityScoreThresholdInput() *f64
```

- *Type:* *f64

---

##### `PerformanceLocalHealthEventsConfigInput`<sup>Optional</sup> <a name="PerformanceLocalHealthEventsConfigInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceLocalHealthEventsConfigInput"></a>

```go
func PerformanceLocalHealthEventsConfigInput() interface{}
```

- *Type:* interface{}

---

##### `PerformanceScoreThresholdInput`<sup>Optional</sup> <a name="PerformanceScoreThresholdInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThresholdInput"></a>

```go
func PerformanceScoreThresholdInput() *f64
```

- *Type:* *f64

---

##### `AvailabilityScoreThreshold`<sup>Required</sup> <a name="AvailabilityScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThreshold"></a>

```go
func AvailabilityScoreThreshold() *f64
```

- *Type:* *f64

---

##### `PerformanceScoreThreshold`<sup>Required</sup> <a name="PerformanceScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThreshold"></a>

```go
func PerformanceScoreThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference <a name="InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/internetmonitormonitor"

internetmonitormonitor.NewInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resetHealthScoreThreshold">ResetHealthScoreThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resetMinTrafficImpact">ResetMinTrafficImpact</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHealthScoreThreshold` <a name="ResetHealthScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resetHealthScoreThreshold"></a>

```go
func ResetHealthScoreThreshold()
```

##### `ResetMinTrafficImpact` <a name="ResetMinTrafficImpact" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resetMinTrafficImpact"></a>

```go
func ResetMinTrafficImpact()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.healthScoreThresholdInput">HealthScoreThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.minTrafficImpactInput">MinTrafficImpactInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.healthScoreThreshold">HealthScoreThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.minTrafficImpact">MinTrafficImpact</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HealthScoreThresholdInput`<sup>Optional</sup> <a name="HealthScoreThresholdInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.healthScoreThresholdInput"></a>

```go
func HealthScoreThresholdInput() *f64
```

- *Type:* *f64

---

##### `MinTrafficImpactInput`<sup>Optional</sup> <a name="MinTrafficImpactInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.minTrafficImpactInput"></a>

```go
func MinTrafficImpactInput() *f64
```

- *Type:* *f64

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `HealthScoreThreshold`<sup>Required</sup> <a name="HealthScoreThreshold" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.healthScoreThreshold"></a>

```go
func HealthScoreThreshold() *f64
```

- *Type:* *f64

---

##### `MinTrafficImpact`<sup>Required</sup> <a name="MinTrafficImpact" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.minTrafficImpact"></a>

```go
func MinTrafficImpact() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference <a name="InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/internetmonitormonitor"

internetmonitormonitor.NewInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.putS3Config">PutS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resetS3Config">ResetS3Config</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Config` <a name="PutS3Config" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.putS3Config"></a>

```go
func PutS3Config(value InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.putS3Config.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

---

##### `ResetS3Config` <a name="ResetS3Config" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resetS3Config"></a>

```go
func ResetS3Config()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3Config">S3Config</a></code> | <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3ConfigInput">S3ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Config`<sup>Required</sup> <a name="S3Config" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3Config"></a>

```go
func S3Config() InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference">InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference</a>

---

##### `S3ConfigInput`<sup>Optional</sup> <a name="S3ConfigInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3ConfigInput"></a>

```go
func S3ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference <a name="InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/internetmonitormonitor"

internetmonitormonitor.NewInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetBucketPrefix">ResetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetLogDeliveryStatus">ResetLogDeliveryStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetBucketPrefix` <a name="ResetBucketPrefix" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetBucketPrefix"></a>

```go
func ResetBucketPrefix()
```

##### `ResetLogDeliveryStatus` <a name="ResetLogDeliveryStatus" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resetLogDeliveryStatus"></a>

```go
func ResetLogDeliveryStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefixInput">BucketPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatusInput">LogDeliveryStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefix">BucketPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatus">LogDeliveryStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `BucketPrefixInput`<sup>Optional</sup> <a name="BucketPrefixInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefixInput"></a>

```go
func BucketPrefixInput() *string
```

- *Type:* *string

---

##### `LogDeliveryStatusInput`<sup>Optional</sup> <a name="LogDeliveryStatusInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatusInput"></a>

```go
func LogDeliveryStatusInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefix"></a>

```go
func BucketPrefix() *string
```

- *Type:* *string

---

##### `LogDeliveryStatus`<sup>Required</sup> <a name="LogDeliveryStatus" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatus"></a>

```go
func LogDeliveryStatus() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### InternetmonitorMonitorTagsList <a name="InternetmonitorMonitorTagsList" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/internetmonitormonitor"

internetmonitormonitor.NewInternetmonitorMonitorTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) InternetmonitorMonitorTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.get"></a>

```go
func Get(index *f64) InternetmonitorMonitorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### InternetmonitorMonitorTagsOutputReference <a name="InternetmonitorMonitorTagsOutputReference" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/internetmonitormonitor"

internetmonitormonitor.NewInternetmonitorMonitorTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) InternetmonitorMonitorTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.internetmonitorMonitor.InternetmonitorMonitorTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



