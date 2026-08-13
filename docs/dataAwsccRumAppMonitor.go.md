# `dataAwsccRumAppMonitor` Submodule <a name="`dataAwsccRumAppMonitor` Submodule" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRumAppMonitor <a name="DataAwsccRumAppMonitor" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/rum_app_monitor awscc_rum_app_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

dataawsccrumappmonitor.NewDataAwsccRumAppMonitor(scope Construct, id *string, config DataAwsccRumAppMonitorConfig) DataAwsccRumAppMonitor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig">DataAwsccRumAppMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig">DataAwsccRumAppMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRumAppMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

dataawsccrumappmonitor.DataAwsccRumAppMonitor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

dataawsccrumappmonitor.DataAwsccRumAppMonitor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

dataawsccrumappmonitor.DataAwsccRumAppMonitor_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

dataawsccrumappmonitor.DataAwsccRumAppMonitor_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccRumAppMonitor resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccRumAppMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccRumAppMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/rum_app_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRumAppMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.appMonitorConfiguration">AppMonitorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference">DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.appMonitorId">AppMonitorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.customEvents">CustomEvents</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference">DataAwsccRumAppMonitorCustomEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.cwLogEnabled">CwLogEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.deobfuscationConfiguration">DeobfuscationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference">DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.domainList">DomainList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.resourcePolicy">ResourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference">DataAwsccRumAppMonitorResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList">DataAwsccRumAppMonitorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AppMonitorConfiguration`<sup>Required</sup> <a name="AppMonitorConfiguration" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.appMonitorConfiguration"></a>

```go
func AppMonitorConfiguration() DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference">DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference</a>

---

##### `AppMonitorId`<sup>Required</sup> <a name="AppMonitorId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.appMonitorId"></a>

```go
func AppMonitorId() *string
```

- *Type:* *string

---

##### `CustomEvents`<sup>Required</sup> <a name="CustomEvents" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.customEvents"></a>

```go
func CustomEvents() DataAwsccRumAppMonitorCustomEventsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference">DataAwsccRumAppMonitorCustomEventsOutputReference</a>

---

##### `CwLogEnabled`<sup>Required</sup> <a name="CwLogEnabled" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.cwLogEnabled"></a>

```go
func CwLogEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `DeobfuscationConfiguration`<sup>Required</sup> <a name="DeobfuscationConfiguration" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.deobfuscationConfiguration"></a>

```go
func DeobfuscationConfiguration() DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference">DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference</a>

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `DomainList`<sup>Required</sup> <a name="DomainList" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.domainList"></a>

```go
func DomainList() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `ResourcePolicy`<sup>Required</sup> <a name="ResourcePolicy" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.resourcePolicy"></a>

```go
func ResourcePolicy() DataAwsccRumAppMonitorResourcePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference">DataAwsccRumAppMonitorResourcePolicyOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.tags"></a>

```go
func Tags() DataAwsccRumAppMonitorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList">DataAwsccRumAppMonitorTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRumAppMonitorAppMonitorConfiguration <a name="DataAwsccRumAppMonitorAppMonitorConfiguration" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

&dataawsccrumappmonitor.DataAwsccRumAppMonitorAppMonitorConfiguration {

}
```


### DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations <a name="DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

&dataawsccrumappmonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations {

}
```


### DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions <a name="DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

&dataawsccrumappmonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions {

}
```


### DataAwsccRumAppMonitorConfig <a name="DataAwsccRumAppMonitorConfig" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

&dataawsccrumappmonitor.DataAwsccRumAppMonitorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/rum_app_monitor#id DataAwsccRumAppMonitor#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRumAppMonitorCustomEvents <a name="DataAwsccRumAppMonitorCustomEvents" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEvents.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

&dataawsccrumappmonitor.DataAwsccRumAppMonitorCustomEvents {

}
```


### DataAwsccRumAppMonitorDeobfuscationConfiguration <a name="DataAwsccRumAppMonitorDeobfuscationConfiguration" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

&dataawsccrumappmonitor.DataAwsccRumAppMonitorDeobfuscationConfiguration {

}
```


### DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps <a name="DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

&dataawsccrumappmonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps {

}
```


### DataAwsccRumAppMonitorResourcePolicy <a name="DataAwsccRumAppMonitorResourcePolicy" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

&dataawsccrumappmonitor.DataAwsccRumAppMonitorResourcePolicy {

}
```


### DataAwsccRumAppMonitorTags <a name="DataAwsccRumAppMonitorTags" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

&dataawsccrumappmonitor.DataAwsccRumAppMonitorTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList <a name="DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

dataawsccrumappmonitor.NewDataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.get"></a>

```go
func Get(index *f64) DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList <a name="DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

dataawsccrumappmonitor.NewDataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.get"></a>

```go
func Get(index *f64) DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference <a name="DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

dataawsccrumappmonitor.NewDataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.dimensionKeys">DimensionKeys</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.eventPattern">EventPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.unitLabel">UnitLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.valueKey">ValueKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DimensionKeys`<sup>Required</sup> <a name="DimensionKeys" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.dimensionKeys"></a>

```go
func DimensionKeys() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `EventPattern`<sup>Required</sup> <a name="EventPattern" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.eventPattern"></a>

```go
func EventPattern() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `UnitLabel`<sup>Required</sup> <a name="UnitLabel" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.unitLabel"></a>

```go
func UnitLabel() *string
```

- *Type:* *string

---

##### `ValueKey`<sup>Required</sup> <a name="ValueKey" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.valueKey"></a>

```go
func ValueKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>

---


### DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference <a name="DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

dataawsccrumappmonitor.NewDataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationArn">DestinationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.metricDefinitions">MetricDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationArn"></a>

```go
func DestinationArn() *string
```

- *Type:* *string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `MetricDefinitions`<sup>Required</sup> <a name="MetricDefinitions" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.metricDefinitions"></a>

```go
func MetricDefinitions() DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations</a>

---


### DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference <a name="DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

dataawsccrumappmonitor.NewDataAwsccRumAppMonitorAppMonitorConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookies">AllowCookies</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.enableXRay">EnableXRay</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPages">ExcludedPages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePages">FavoritePages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArn">GuestRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolId">IdentityPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.includedPages">IncludedPages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.metricDestinations">MetricDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRate">SessionSampleRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.telemetries">Telemetries</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfiguration">DataAwsccRumAppMonitorAppMonitorConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowCookies`<sup>Required</sup> <a name="AllowCookies" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookies"></a>

```go
func AllowCookies() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `EnableXRay`<sup>Required</sup> <a name="EnableXRay" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.enableXRay"></a>

```go
func EnableXRay() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ExcludedPages`<sup>Required</sup> <a name="ExcludedPages" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPages"></a>

```go
func ExcludedPages() *[]*string
```

- *Type:* *[]*string

---

##### `FavoritePages`<sup>Required</sup> <a name="FavoritePages" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePages"></a>

```go
func FavoritePages() *[]*string
```

- *Type:* *[]*string

---

##### `GuestRoleArn`<sup>Required</sup> <a name="GuestRoleArn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArn"></a>

```go
func GuestRoleArn() *string
```

- *Type:* *string

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolId"></a>

```go
func IdentityPoolId() *string
```

- *Type:* *string

---

##### `IncludedPages`<sup>Required</sup> <a name="IncludedPages" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.includedPages"></a>

```go
func IncludedPages() *[]*string
```

- *Type:* *[]*string

---

##### `MetricDestinations`<sup>Required</sup> <a name="MetricDestinations" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.metricDestinations"></a>

```go
func MetricDestinations() DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList</a>

---

##### `SessionSampleRate`<sup>Required</sup> <a name="SessionSampleRate" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRate"></a>

```go
func SessionSampleRate() *f64
```

- *Type:* *f64

---

##### `Telemetries`<sup>Required</sup> <a name="Telemetries" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.telemetries"></a>

```go
func Telemetries() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRumAppMonitorAppMonitorConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfiguration">DataAwsccRumAppMonitorAppMonitorConfiguration</a>

---


### DataAwsccRumAppMonitorCustomEventsOutputReference <a name="DataAwsccRumAppMonitorCustomEventsOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

dataawsccrumappmonitor.NewDataAwsccRumAppMonitorCustomEventsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRumAppMonitorCustomEventsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEvents">DataAwsccRumAppMonitorCustomEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRumAppMonitorCustomEvents
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEvents">DataAwsccRumAppMonitorCustomEvents</a>

---


### DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference <a name="DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

dataawsccrumappmonitor.NewDataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a>

---


### DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference <a name="DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

dataawsccrumappmonitor.NewDataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.javaScriptSourceMaps">JavaScriptSourceMaps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference">DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfiguration">DataAwsccRumAppMonitorDeobfuscationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JavaScriptSourceMaps`<sup>Required</sup> <a name="JavaScriptSourceMaps" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.javaScriptSourceMaps"></a>

```go
func JavaScriptSourceMaps() DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference">DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRumAppMonitorDeobfuscationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfiguration">DataAwsccRumAppMonitorDeobfuscationConfiguration</a>

---


### DataAwsccRumAppMonitorResourcePolicyOutputReference <a name="DataAwsccRumAppMonitorResourcePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

dataawsccrumappmonitor.NewDataAwsccRumAppMonitorResourcePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRumAppMonitorResourcePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.policyDocument">PolicyDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.policyRevisionId">PolicyRevisionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicy">DataAwsccRumAppMonitorResourcePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.policyDocument"></a>

```go
func PolicyDocument() *string
```

- *Type:* *string

---

##### `PolicyRevisionId`<sup>Required</sup> <a name="PolicyRevisionId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.policyRevisionId"></a>

```go
func PolicyRevisionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRumAppMonitorResourcePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicy">DataAwsccRumAppMonitorResourcePolicy</a>

---


### DataAwsccRumAppMonitorTagsList <a name="DataAwsccRumAppMonitorTagsList" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

dataawsccrumappmonitor.NewDataAwsccRumAppMonitorTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRumAppMonitorTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.get"></a>

```go
func Get(index *f64) DataAwsccRumAppMonitorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRumAppMonitorTagsOutputReference <a name="DataAwsccRumAppMonitorTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccrumappmonitor"

dataawsccrumappmonitor.NewDataAwsccRumAppMonitorTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRumAppMonitorTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTags">DataAwsccRumAppMonitorTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRumAppMonitorTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTags">DataAwsccRumAppMonitorTags</a>

---



