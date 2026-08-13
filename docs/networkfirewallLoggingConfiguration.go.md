# `networkfirewallLoggingConfiguration` Submodule <a name="`networkfirewallLoggingConfiguration` Submodule" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallLoggingConfiguration <a name="NetworkfirewallLoggingConfiguration" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_logging_configuration awscc_networkfirewall_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallloggingconfiguration"

networkfirewallloggingconfiguration.NewNetworkfirewallLoggingConfiguration(scope Construct, id *string, config NetworkfirewallLoggingConfigurationConfig) NetworkfirewallLoggingConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig">NetworkfirewallLoggingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig">NetworkfirewallLoggingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.putLoggingConfiguration">PutLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.resetEnableMonitoringDashboard">ResetEnableMonitoringDashboard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.resetFirewallName">ResetFirewallName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoggingConfiguration` <a name="PutLoggingConfiguration" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.putLoggingConfiguration"></a>

```go
func PutLoggingConfiguration(value NetworkfirewallLoggingConfigurationLoggingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfiguration">NetworkfirewallLoggingConfigurationLoggingConfiguration</a>

---

##### `ResetEnableMonitoringDashboard` <a name="ResetEnableMonitoringDashboard" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.resetEnableMonitoringDashboard"></a>

```go
func ResetEnableMonitoringDashboard()
```

##### `ResetFirewallName` <a name="ResetFirewallName" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.resetFirewallName"></a>

```go
func ResetFirewallName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkfirewallLoggingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallloggingconfiguration"

networkfirewallloggingconfiguration.NetworkfirewallLoggingConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallloggingconfiguration"

networkfirewallloggingconfiguration.NetworkfirewallLoggingConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallloggingconfiguration"

networkfirewallloggingconfiguration.NetworkfirewallLoggingConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallloggingconfiguration"

networkfirewallloggingconfiguration.NetworkfirewallLoggingConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkfirewallLoggingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkfirewallLoggingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkfirewallLoggingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_logging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkfirewallLoggingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference">NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.enableMonitoringDashboardInput">EnableMonitoringDashboardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.firewallArnInput">FirewallArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.firewallNameInput">FirewallNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.loggingConfigurationInput">LoggingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.enableMonitoringDashboard">EnableMonitoringDashboard</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.firewallArn">FirewallArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.firewallName">FirewallName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoggingConfiguration`<sup>Required</sup> <a name="LoggingConfiguration" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.loggingConfiguration"></a>

```go
func LoggingConfiguration() NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference">NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference</a>

---

##### `EnableMonitoringDashboardInput`<sup>Optional</sup> <a name="EnableMonitoringDashboardInput" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.enableMonitoringDashboardInput"></a>

```go
func EnableMonitoringDashboardInput() interface{}
```

- *Type:* interface{}

---

##### `FirewallArnInput`<sup>Optional</sup> <a name="FirewallArnInput" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.firewallArnInput"></a>

```go
func FirewallArnInput() *string
```

- *Type:* *string

---

##### `FirewallNameInput`<sup>Optional</sup> <a name="FirewallNameInput" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.firewallNameInput"></a>

```go
func FirewallNameInput() *string
```

- *Type:* *string

---

##### `LoggingConfigurationInput`<sup>Optional</sup> <a name="LoggingConfigurationInput" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.loggingConfigurationInput"></a>

```go
func LoggingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `EnableMonitoringDashboard`<sup>Required</sup> <a name="EnableMonitoringDashboard" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.enableMonitoringDashboard"></a>

```go
func EnableMonitoringDashboard() interface{}
```

- *Type:* interface{}

---

##### `FirewallArn`<sup>Required</sup> <a name="FirewallArn" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.firewallArn"></a>

```go
func FirewallArn() *string
```

- *Type:* *string

---

##### `FirewallName`<sup>Required</sup> <a name="FirewallName" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.firewallName"></a>

```go
func FirewallName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallLoggingConfigurationConfig <a name="NetworkfirewallLoggingConfigurationConfig" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallloggingconfiguration"

&networkfirewallloggingconfiguration.NetworkfirewallLoggingConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FirewallArn: *string,
	LoggingConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfiguration,
	EnableMonitoringDashboard: interface{},
	FirewallName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.firewallArn">FirewallArn</a></code> | <code>*string</code> | A resource ARN. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfiguration">NetworkfirewallLoggingConfigurationLoggingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_logging_configuration#logging_configuration NetworkfirewallLoggingConfiguration#logging_configuration}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.enableMonitoringDashboard">EnableMonitoringDashboard</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_logging_configuration#enable_monitoring_dashboard NetworkfirewallLoggingConfiguration#enable_monitoring_dashboard}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.firewallName">FirewallName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_logging_configuration#firewall_name NetworkfirewallLoggingConfiguration#firewall_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FirewallArn`<sup>Required</sup> <a name="FirewallArn" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.firewallArn"></a>

```go
FirewallArn *string
```

- *Type:* *string

A resource ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_logging_configuration#firewall_arn NetworkfirewallLoggingConfiguration#firewall_arn}

---

##### `LoggingConfiguration`<sup>Required</sup> <a name="LoggingConfiguration" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.loggingConfiguration"></a>

```go
LoggingConfiguration NetworkfirewallLoggingConfigurationLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfiguration">NetworkfirewallLoggingConfigurationLoggingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_logging_configuration#logging_configuration NetworkfirewallLoggingConfiguration#logging_configuration}.

---

##### `EnableMonitoringDashboard`<sup>Optional</sup> <a name="EnableMonitoringDashboard" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.enableMonitoringDashboard"></a>

```go
EnableMonitoringDashboard interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_logging_configuration#enable_monitoring_dashboard NetworkfirewallLoggingConfiguration#enable_monitoring_dashboard}.

---

##### `FirewallName`<sup>Optional</sup> <a name="FirewallName" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationConfig.property.firewallName"></a>

```go
FirewallName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_logging_configuration#firewall_name NetworkfirewallLoggingConfiguration#firewall_name}.

---

### NetworkfirewallLoggingConfigurationLoggingConfiguration <a name="NetworkfirewallLoggingConfigurationLoggingConfiguration" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallloggingconfiguration"

&networkfirewallloggingconfiguration.NetworkfirewallLoggingConfigurationLoggingConfiguration {
	LogDestinationConfigs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfiguration.property.logDestinationConfigs">LogDestinationConfigs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_logging_configuration#log_destination_configs NetworkfirewallLoggingConfiguration#log_destination_configs}. |

---

##### `LogDestinationConfigs`<sup>Required</sup> <a name="LogDestinationConfigs" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfiguration.property.logDestinationConfigs"></a>

```go
LogDestinationConfigs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_logging_configuration#log_destination_configs NetworkfirewallLoggingConfiguration#log_destination_configs}.

---

### NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs <a name="NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallloggingconfiguration"

&networkfirewallloggingconfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs {
	LogDestination: *map[string]*string,
	LogDestinationType: *string,
	LogType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs.property.logDestination">LogDestination</a></code> | <code>*map[string]*string</code> | A key-value pair to configure the logDestinations. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs.property.logDestinationType">LogDestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_logging_configuration#log_destination_type NetworkfirewallLoggingConfiguration#log_destination_type}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs.property.logType">LogType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_logging_configuration#log_type NetworkfirewallLoggingConfiguration#log_type}. |

---

##### `LogDestination`<sup>Required</sup> <a name="LogDestination" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs.property.logDestination"></a>

```go
LogDestination *map[string]*string
```

- *Type:* *map[string]*string

A key-value pair to configure the logDestinations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_logging_configuration#log_destination NetworkfirewallLoggingConfiguration#log_destination}

---

##### `LogDestinationType`<sup>Required</sup> <a name="LogDestinationType" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs.property.logDestinationType"></a>

```go
LogDestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_logging_configuration#log_destination_type NetworkfirewallLoggingConfiguration#log_destination_type}.

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigs.property.logType"></a>

```go
LogType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_logging_configuration#log_type NetworkfirewallLoggingConfiguration#log_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList <a name="NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallloggingconfiguration"

networkfirewallloggingconfiguration.NewNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.get"></a>

```go
func Get(index *f64) NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference <a name="NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallloggingconfiguration"

networkfirewallloggingconfiguration.NewNetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logDestinationInput">LogDestinationInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logDestinationTypeInput">LogDestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logDestination">LogDestination</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logDestinationType">LogDestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logType">LogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogDestinationInput`<sup>Optional</sup> <a name="LogDestinationInput" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logDestinationInput"></a>

```go
func LogDestinationInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LogDestinationTypeInput`<sup>Optional</sup> <a name="LogDestinationTypeInput" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logDestinationTypeInput"></a>

```go
func LogDestinationTypeInput() *string
```

- *Type:* *string

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logTypeInput"></a>

```go
func LogTypeInput() *string
```

- *Type:* *string

---

##### `LogDestination`<sup>Required</sup> <a name="LogDestination" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logDestination"></a>

```go
func LogDestination() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LogDestinationType`<sup>Required</sup> <a name="LogDestinationType" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logDestinationType"></a>

```go
func LogDestinationType() *string
```

- *Type:* *string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.logType"></a>

```go
func LogType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference <a name="NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallloggingconfiguration"

networkfirewallloggingconfiguration.NewNetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.putLogDestinationConfigs">PutLogDestinationConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogDestinationConfigs` <a name="PutLogDestinationConfigs" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.putLogDestinationConfigs"></a>

```go
func PutLogDestinationConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.putLogDestinationConfigs.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.logDestinationConfigs">LogDestinationConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList">NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.logDestinationConfigsInput">LogDestinationConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogDestinationConfigs`<sup>Required</sup> <a name="LogDestinationConfigs" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.logDestinationConfigs"></a>

```go
func LogDestinationConfigs() NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList">NetworkfirewallLoggingConfigurationLoggingConfigurationLogDestinationConfigsList</a>

---

##### `LogDestinationConfigsInput`<sup>Optional</sup> <a name="LogDestinationConfigsInput" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.logDestinationConfigsInput"></a>

```go
func LogDestinationConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallLoggingConfiguration.NetworkfirewallLoggingConfigurationLoggingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



