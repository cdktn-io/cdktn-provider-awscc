# `globalacceleratorEndpointGroup` Submodule <a name="`globalacceleratorEndpointGroup` Submodule" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorEndpointGroup <a name="GlobalacceleratorEndpointGroup" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group awscc_globalaccelerator_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/globalacceleratorendpointgroup"

globalacceleratorendpointgroup.NewGlobalacceleratorEndpointGroup(scope Construct, id *string, config GlobalacceleratorEndpointGroupConfig) GlobalacceleratorEndpointGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig">GlobalacceleratorEndpointGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig">GlobalacceleratorEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putEndpointConfigurations">PutEndpointConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putPortOverrides">PutPortOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetEndpointConfigurations">ResetEndpointConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckIntervalSeconds">ResetHealthCheckIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPath">ResetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPort">ResetHealthCheckPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckProtocol">ResetHealthCheckProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetPortOverrides">ResetPortOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetThresholdCount">ResetThresholdCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetTrafficDialPercentage">ResetTrafficDialPercentage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpointConfigurations` <a name="PutEndpointConfigurations" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putEndpointConfigurations"></a>

```go
func PutEndpointConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putEndpointConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPortOverrides` <a name="PutPortOverrides" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putPortOverrides"></a>

```go
func PutPortOverrides(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putPortOverrides.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEndpointConfigurations` <a name="ResetEndpointConfigurations" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetEndpointConfigurations"></a>

```go
func ResetEndpointConfigurations()
```

##### `ResetHealthCheckIntervalSeconds` <a name="ResetHealthCheckIntervalSeconds" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckIntervalSeconds"></a>

```go
func ResetHealthCheckIntervalSeconds()
```

##### `ResetHealthCheckPath` <a name="ResetHealthCheckPath" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPath"></a>

```go
func ResetHealthCheckPath()
```

##### `ResetHealthCheckPort` <a name="ResetHealthCheckPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPort"></a>

```go
func ResetHealthCheckPort()
```

##### `ResetHealthCheckProtocol` <a name="ResetHealthCheckProtocol" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckProtocol"></a>

```go
func ResetHealthCheckProtocol()
```

##### `ResetPortOverrides` <a name="ResetPortOverrides" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetPortOverrides"></a>

```go
func ResetPortOverrides()
```

##### `ResetThresholdCount` <a name="ResetThresholdCount" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetThresholdCount"></a>

```go
func ResetThresholdCount()
```

##### `ResetTrafficDialPercentage` <a name="ResetTrafficDialPercentage" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetTrafficDialPercentage"></a>

```go
func ResetTrafficDialPercentage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlobalacceleratorEndpointGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/globalacceleratorendpointgroup"

globalacceleratorendpointgroup.GlobalacceleratorEndpointGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/globalacceleratorendpointgroup"

globalacceleratorendpointgroup.GlobalacceleratorEndpointGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/globalacceleratorendpointgroup"

globalacceleratorendpointgroup.GlobalacceleratorEndpointGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/globalacceleratorendpointgroup"

globalacceleratorendpointgroup.GlobalacceleratorEndpointGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GlobalacceleratorEndpointGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GlobalacceleratorEndpointGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GlobalacceleratorEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GlobalacceleratorEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfigurations">EndpointConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList">GlobalacceleratorEndpointGroupEndpointConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupArn">EndpointGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverrides">PortOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList">GlobalacceleratorEndpointGroupPortOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfigurationsInput">EndpointConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegionInput">EndpointGroupRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSecondsInput">HealthCheckIntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPathInput">HealthCheckPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPortInput">HealthCheckPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocolInput">HealthCheckProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArnInput">ListenerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverridesInput">PortOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCountInput">ThresholdCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentageInput">TrafficDialPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegion">EndpointGroupRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSeconds">HealthCheckIntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPath">HealthCheckPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPort">HealthCheckPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocol">HealthCheckProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArn">ListenerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCount">ThresholdCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentage">TrafficDialPercentage</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndpointConfigurations`<sup>Required</sup> <a name="EndpointConfigurations" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfigurations"></a>

```go
func EndpointConfigurations() GlobalacceleratorEndpointGroupEndpointConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList">GlobalacceleratorEndpointGroupEndpointConfigurationsList</a>

---

##### `EndpointGroupArn`<sup>Required</sup> <a name="EndpointGroupArn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupArn"></a>

```go
func EndpointGroupArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PortOverrides`<sup>Required</sup> <a name="PortOverrides" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverrides"></a>

```go
func PortOverrides() GlobalacceleratorEndpointGroupPortOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList">GlobalacceleratorEndpointGroupPortOverridesList</a>

---

##### `EndpointConfigurationsInput`<sup>Optional</sup> <a name="EndpointConfigurationsInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfigurationsInput"></a>

```go
func EndpointConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointGroupRegionInput`<sup>Optional</sup> <a name="EndpointGroupRegionInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegionInput"></a>

```go
func EndpointGroupRegionInput() *string
```

- *Type:* *string

---

##### `HealthCheckIntervalSecondsInput`<sup>Optional</sup> <a name="HealthCheckIntervalSecondsInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSecondsInput"></a>

```go
func HealthCheckIntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `HealthCheckPathInput`<sup>Optional</sup> <a name="HealthCheckPathInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPathInput"></a>

```go
func HealthCheckPathInput() *string
```

- *Type:* *string

---

##### `HealthCheckPortInput`<sup>Optional</sup> <a name="HealthCheckPortInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPortInput"></a>

```go
func HealthCheckPortInput() *f64
```

- *Type:* *f64

---

##### `HealthCheckProtocolInput`<sup>Optional</sup> <a name="HealthCheckProtocolInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocolInput"></a>

```go
func HealthCheckProtocolInput() *string
```

- *Type:* *string

---

##### `ListenerArnInput`<sup>Optional</sup> <a name="ListenerArnInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArnInput"></a>

```go
func ListenerArnInput() *string
```

- *Type:* *string

---

##### `PortOverridesInput`<sup>Optional</sup> <a name="PortOverridesInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverridesInput"></a>

```go
func PortOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `ThresholdCountInput`<sup>Optional</sup> <a name="ThresholdCountInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCountInput"></a>

```go
func ThresholdCountInput() *f64
```

- *Type:* *f64

---

##### `TrafficDialPercentageInput`<sup>Optional</sup> <a name="TrafficDialPercentageInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentageInput"></a>

```go
func TrafficDialPercentageInput() *f64
```

- *Type:* *f64

---

##### `EndpointGroupRegion`<sup>Required</sup> <a name="EndpointGroupRegion" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegion"></a>

```go
func EndpointGroupRegion() *string
```

- *Type:* *string

---

##### `HealthCheckIntervalSeconds`<sup>Required</sup> <a name="HealthCheckIntervalSeconds" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSeconds"></a>

```go
func HealthCheckIntervalSeconds() *f64
```

- *Type:* *f64

---

##### `HealthCheckPath`<sup>Required</sup> <a name="HealthCheckPath" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPath"></a>

```go
func HealthCheckPath() *string
```

- *Type:* *string

---

##### `HealthCheckPort`<sup>Required</sup> <a name="HealthCheckPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPort"></a>

```go
func HealthCheckPort() *f64
```

- *Type:* *f64

---

##### `HealthCheckProtocol`<sup>Required</sup> <a name="HealthCheckProtocol" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocol"></a>

```go
func HealthCheckProtocol() *string
```

- *Type:* *string

---

##### `ListenerArn`<sup>Required</sup> <a name="ListenerArn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArn"></a>

```go
func ListenerArn() *string
```

- *Type:* *string

---

##### `ThresholdCount`<sup>Required</sup> <a name="ThresholdCount" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCount"></a>

```go
func ThresholdCount() *f64
```

- *Type:* *f64

---

##### `TrafficDialPercentage`<sup>Required</sup> <a name="TrafficDialPercentage" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentage"></a>

```go
func TrafficDialPercentage() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorEndpointGroupConfig <a name="GlobalacceleratorEndpointGroupConfig" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/globalacceleratorendpointgroup"

&globalacceleratorendpointgroup.GlobalacceleratorEndpointGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EndpointGroupRegion: *string,
	ListenerArn: *string,
	EndpointConfigurations: interface{},
	HealthCheckIntervalSeconds: *f64,
	HealthCheckPath: *string,
	HealthCheckPort: *f64,
	HealthCheckProtocol: *string,
	PortOverrides: interface{},
	ThresholdCount: *f64,
	TrafficDialPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointGroupRegion">EndpointGroupRegion</a></code> | <code>*string</code> | The name of the AWS Region where the endpoint group is located. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.listenerArn">ListenerArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the listener. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointConfigurations">EndpointConfigurations</a></code> | <code>interface{}</code> | The list of endpoint objects. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckIntervalSeconds">HealthCheckIntervalSeconds</a></code> | <code>*f64</code> | The time in seconds between each health check for an endpoint. Must be a value of 10 or 30. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPath">HealthCheckPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#health_check_path GlobalacceleratorEndpointGroup#health_check_path}. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPort">HealthCheckPort</a></code> | <code>*f64</code> | The port that AWS Global Accelerator uses to check the health of endpoints in this endpoint group. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckProtocol">HealthCheckProtocol</a></code> | <code>*string</code> | The protocol that AWS Global Accelerator uses to check the health of endpoints in this endpoint group. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.portOverrides">PortOverrides</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#port_overrides GlobalacceleratorEndpointGroup#port_overrides}. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.thresholdCount">ThresholdCount</a></code> | <code>*f64</code> | The number of consecutive health checks required to set the state of the endpoint to unhealthy. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.trafficDialPercentage">TrafficDialPercentage</a></code> | <code>*f64</code> | The percentage of traffic to sent to an AWS Region. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndpointGroupRegion`<sup>Required</sup> <a name="EndpointGroupRegion" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointGroupRegion"></a>

```go
EndpointGroupRegion *string
```

- *Type:* *string

The name of the AWS Region where the endpoint group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#endpoint_group_region GlobalacceleratorEndpointGroup#endpoint_group_region}

---

##### `ListenerArn`<sup>Required</sup> <a name="ListenerArn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.listenerArn"></a>

```go
ListenerArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#listener_arn GlobalacceleratorEndpointGroup#listener_arn}

---

##### `EndpointConfigurations`<sup>Optional</sup> <a name="EndpointConfigurations" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointConfigurations"></a>

```go
EndpointConfigurations interface{}
```

- *Type:* interface{}

The list of endpoint objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#endpoint_configurations GlobalacceleratorEndpointGroup#endpoint_configurations}

---

##### `HealthCheckIntervalSeconds`<sup>Optional</sup> <a name="HealthCheckIntervalSeconds" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckIntervalSeconds"></a>

```go
HealthCheckIntervalSeconds *f64
```

- *Type:* *f64

The time in seconds between each health check for an endpoint. Must be a value of 10 or 30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#health_check_interval_seconds GlobalacceleratorEndpointGroup#health_check_interval_seconds}

---

##### `HealthCheckPath`<sup>Optional</sup> <a name="HealthCheckPath" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPath"></a>

```go
HealthCheckPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#health_check_path GlobalacceleratorEndpointGroup#health_check_path}.

---

##### `HealthCheckPort`<sup>Optional</sup> <a name="HealthCheckPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPort"></a>

```go
HealthCheckPort *f64
```

- *Type:* *f64

The port that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#health_check_port GlobalacceleratorEndpointGroup#health_check_port}

---

##### `HealthCheckProtocol`<sup>Optional</sup> <a name="HealthCheckProtocol" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckProtocol"></a>

```go
HealthCheckProtocol *string
```

- *Type:* *string

The protocol that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#health_check_protocol GlobalacceleratorEndpointGroup#health_check_protocol}

---

##### `PortOverrides`<sup>Optional</sup> <a name="PortOverrides" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.portOverrides"></a>

```go
PortOverrides interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#port_overrides GlobalacceleratorEndpointGroup#port_overrides}.

---

##### `ThresholdCount`<sup>Optional</sup> <a name="ThresholdCount" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.thresholdCount"></a>

```go
ThresholdCount *f64
```

- *Type:* *f64

The number of consecutive health checks required to set the state of the endpoint to unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#threshold_count GlobalacceleratorEndpointGroup#threshold_count}

---

##### `TrafficDialPercentage`<sup>Optional</sup> <a name="TrafficDialPercentage" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.trafficDialPercentage"></a>

```go
TrafficDialPercentage *f64
```

- *Type:* *f64

The percentage of traffic to sent to an AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#traffic_dial_percentage GlobalacceleratorEndpointGroup#traffic_dial_percentage}

---

### GlobalacceleratorEndpointGroupEndpointConfigurations <a name="GlobalacceleratorEndpointGroupEndpointConfigurations" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/globalacceleratorendpointgroup"

&globalacceleratorendpointgroup.GlobalacceleratorEndpointGroupEndpointConfigurations {
	AttachmentArn: *string,
	ClientIpPreservationEnabled: interface{},
	EndpointId: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.attachmentArn">AttachmentArn</a></code> | <code>*string</code> | Attachment ARN that provides access control to the cross account endpoint. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.clientIpPreservationEnabled">ClientIpPreservationEnabled</a></code> | <code>interface{}</code> | true if client ip should be preserved. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.endpointId">EndpointId</a></code> | <code>*string</code> | Id of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.weight">Weight</a></code> | <code>*f64</code> | The weight for the endpoint. |

---

##### `AttachmentArn`<sup>Optional</sup> <a name="AttachmentArn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.attachmentArn"></a>

```go
AttachmentArn *string
```

- *Type:* *string

Attachment ARN that provides access control to the cross account endpoint.

Not required for resources hosted in the same account as the endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#attachment_arn GlobalacceleratorEndpointGroup#attachment_arn}

---

##### `ClientIpPreservationEnabled`<sup>Optional</sup> <a name="ClientIpPreservationEnabled" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.clientIpPreservationEnabled"></a>

```go
ClientIpPreservationEnabled interface{}
```

- *Type:* interface{}

true if client ip should be preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#client_ip_preservation_enabled GlobalacceleratorEndpointGroup#client_ip_preservation_enabled}

---

##### `EndpointId`<sup>Optional</sup> <a name="EndpointId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.endpointId"></a>

```go
EndpointId *string
```

- *Type:* *string

Id of the endpoint.

For Network/Application Load Balancer this value is the ARN.  For EIP, this value is the allocation ID.  For EC2 instances, this is the EC2 instance ID

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#endpoint_id GlobalacceleratorEndpointGroup#endpoint_id}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

The weight for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#weight GlobalacceleratorEndpointGroup#weight}

---

### GlobalacceleratorEndpointGroupPortOverrides <a name="GlobalacceleratorEndpointGroupPortOverrides" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/globalacceleratorendpointgroup"

&globalacceleratorendpointgroup.GlobalacceleratorEndpointGroupPortOverrides {
	EndpointPort: *f64,
	ListenerPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides.property.endpointPort">EndpointPort</a></code> | <code>*f64</code> | A network port number. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides.property.listenerPort">ListenerPort</a></code> | <code>*f64</code> | A network port number. |

---

##### `EndpointPort`<sup>Optional</sup> <a name="EndpointPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides.property.endpointPort"></a>

```go
EndpointPort *f64
```

- *Type:* *f64

A network port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#endpoint_port GlobalacceleratorEndpointGroup#endpoint_port}

---

##### `ListenerPort`<sup>Optional</sup> <a name="ListenerPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides.property.listenerPort"></a>

```go
ListenerPort *f64
```

- *Type:* *f64

A network port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#listener_port GlobalacceleratorEndpointGroup#listener_port}

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorEndpointGroupEndpointConfigurationsList <a name="GlobalacceleratorEndpointGroupEndpointConfigurationsList" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/globalacceleratorendpointgroup"

globalacceleratorendpointgroup.NewGlobalacceleratorEndpointGroupEndpointConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlobalacceleratorEndpointGroupEndpointConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.get"></a>

```go
func Get(index *f64) GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference <a name="GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/globalacceleratorendpointgroup"

globalacceleratorendpointgroup.NewGlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetAttachmentArn">ResetAttachmentArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetClientIpPreservationEnabled">ResetClientIpPreservationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetEndpointId">ResetEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttachmentArn` <a name="ResetAttachmentArn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetAttachmentArn"></a>

```go
func ResetAttachmentArn()
```

##### `ResetClientIpPreservationEnabled` <a name="ResetClientIpPreservationEnabled" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetClientIpPreservationEnabled"></a>

```go
func ResetClientIpPreservationEnabled()
```

##### `ResetEndpointId` <a name="ResetEndpointId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetEndpointId"></a>

```go
func ResetEndpointId()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.attachmentArnInput">AttachmentArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.clientIpPreservationEnabledInput">ClientIpPreservationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.endpointIdInput">EndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.attachmentArn">AttachmentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.clientIpPreservationEnabled">ClientIpPreservationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.endpointId">EndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachmentArnInput`<sup>Optional</sup> <a name="AttachmentArnInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.attachmentArnInput"></a>

```go
func AttachmentArnInput() *string
```

- *Type:* *string

---

##### `ClientIpPreservationEnabledInput`<sup>Optional</sup> <a name="ClientIpPreservationEnabledInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.clientIpPreservationEnabledInput"></a>

```go
func ClientIpPreservationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointIdInput`<sup>Optional</sup> <a name="EndpointIdInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.endpointIdInput"></a>

```go
func EndpointIdInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `AttachmentArn`<sup>Required</sup> <a name="AttachmentArn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.attachmentArn"></a>

```go
func AttachmentArn() *string
```

- *Type:* *string

---

##### `ClientIpPreservationEnabled`<sup>Required</sup> <a name="ClientIpPreservationEnabled" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.clientIpPreservationEnabled"></a>

```go
func ClientIpPreservationEnabled() interface{}
```

- *Type:* interface{}

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.endpointId"></a>

```go
func EndpointId() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlobalacceleratorEndpointGroupPortOverridesList <a name="GlobalacceleratorEndpointGroupPortOverridesList" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/globalacceleratorendpointgroup"

globalacceleratorendpointgroup.NewGlobalacceleratorEndpointGroupPortOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlobalacceleratorEndpointGroupPortOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.get"></a>

```go
func Get(index *f64) GlobalacceleratorEndpointGroupPortOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlobalacceleratorEndpointGroupPortOverridesOutputReference <a name="GlobalacceleratorEndpointGroupPortOverridesOutputReference" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/globalacceleratorendpointgroup"

globalacceleratorendpointgroup.NewGlobalacceleratorEndpointGroupPortOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlobalacceleratorEndpointGroupPortOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.resetEndpointPort">ResetEndpointPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.resetListenerPort">ResetListenerPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointPort` <a name="ResetEndpointPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.resetEndpointPort"></a>

```go
func ResetEndpointPort()
```

##### `ResetListenerPort` <a name="ResetListenerPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.resetListenerPort"></a>

```go
func ResetListenerPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.endpointPortInput">EndpointPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.listenerPortInput">ListenerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.endpointPort">EndpointPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.listenerPort">ListenerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndpointPortInput`<sup>Optional</sup> <a name="EndpointPortInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.endpointPortInput"></a>

```go
func EndpointPortInput() *f64
```

- *Type:* *f64

---

##### `ListenerPortInput`<sup>Optional</sup> <a name="ListenerPortInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.listenerPortInput"></a>

```go
func ListenerPortInput() *f64
```

- *Type:* *f64

---

##### `EndpointPort`<sup>Required</sup> <a name="EndpointPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.endpointPort"></a>

```go
func EndpointPort() *f64
```

- *Type:* *f64

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.listenerPort"></a>

```go
func ListenerPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



