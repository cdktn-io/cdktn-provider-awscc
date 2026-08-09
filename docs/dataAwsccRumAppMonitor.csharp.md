# `dataAwsccRumAppMonitor` Submodule <a name="`dataAwsccRumAppMonitor` Submodule" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRumAppMonitor <a name="DataAwsccRumAppMonitor" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/rum_app_monitor awscc_rum_app_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRumAppMonitor(Construct Scope, string Id, DataAwsccRumAppMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig">DataAwsccRumAppMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRumAppMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRumAppMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRumAppMonitor.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRumAppMonitor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccRumAppMonitor resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRumAppMonitor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRumAppMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/rum_app_monitor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRumAppMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.appMonitorConfiguration">AppMonitorConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference">DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.appMonitorId">AppMonitorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.customEvents">CustomEvents</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference">DataAwsccRumAppMonitorCustomEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.cwLogEnabled">CwLogEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.deobfuscationConfiguration">DeobfuscationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference">DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.domainList">DomainList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.resourcePolicy">ResourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference">DataAwsccRumAppMonitorResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList">DataAwsccRumAppMonitorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AppMonitorConfiguration`<sup>Required</sup> <a name="AppMonitorConfiguration" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.appMonitorConfiguration"></a>

```csharp
public DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference AppMonitorConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference">DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference</a>

---

##### `AppMonitorId`<sup>Required</sup> <a name="AppMonitorId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.appMonitorId"></a>

```csharp
public string AppMonitorId { get; }
```

- *Type:* string

---

##### `CustomEvents`<sup>Required</sup> <a name="CustomEvents" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.customEvents"></a>

```csharp
public DataAwsccRumAppMonitorCustomEventsOutputReference CustomEvents { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference">DataAwsccRumAppMonitorCustomEventsOutputReference</a>

---

##### `CwLogEnabled`<sup>Required</sup> <a name="CwLogEnabled" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.cwLogEnabled"></a>

```csharp
public IResolvable CwLogEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DeobfuscationConfiguration`<sup>Required</sup> <a name="DeobfuscationConfiguration" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.deobfuscationConfiguration"></a>

```csharp
public DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference DeobfuscationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference">DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference</a>

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `DomainList`<sup>Required</sup> <a name="DomainList" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.domainList"></a>

```csharp
public string[] DomainList { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `ResourcePolicy`<sup>Required</sup> <a name="ResourcePolicy" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.resourcePolicy"></a>

```csharp
public DataAwsccRumAppMonitorResourcePolicyOutputReference ResourcePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference">DataAwsccRumAppMonitorResourcePolicyOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.tags"></a>

```csharp
public DataAwsccRumAppMonitorTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList">DataAwsccRumAppMonitorTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRumAppMonitorAppMonitorConfiguration <a name="DataAwsccRumAppMonitorAppMonitorConfiguration" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRumAppMonitorAppMonitorConfiguration {

};
```


### DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations <a name="DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations {

};
```


### DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions <a name="DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions {

};
```


### DataAwsccRumAppMonitorConfig <a name="DataAwsccRumAppMonitorConfig" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRumAppMonitorConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/rum_app_monitor#id DataAwsccRumAppMonitor#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRumAppMonitorCustomEvents <a name="DataAwsccRumAppMonitorCustomEvents" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEvents.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRumAppMonitorCustomEvents {

};
```


### DataAwsccRumAppMonitorDeobfuscationConfiguration <a name="DataAwsccRumAppMonitorDeobfuscationConfiguration" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRumAppMonitorDeobfuscationConfiguration {

};
```


### DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps <a name="DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps {

};
```


### DataAwsccRumAppMonitorResourcePolicy <a name="DataAwsccRumAppMonitorResourcePolicy" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRumAppMonitorResourcePolicy {

};
```


### DataAwsccRumAppMonitorTags <a name="DataAwsccRumAppMonitorTags" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRumAppMonitorTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList <a name="DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.get"></a>

```csharp
private DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList <a name="DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.get"></a>

```csharp
private DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference <a name="DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.dimensionKeys">DimensionKeys</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.eventPattern">EventPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.unitLabel">UnitLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.valueKey">ValueKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DimensionKeys`<sup>Required</sup> <a name="DimensionKeys" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.dimensionKeys"></a>

```csharp
public StringMap DimensionKeys { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EventPattern`<sup>Required</sup> <a name="EventPattern" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.eventPattern"></a>

```csharp
public string EventPattern { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `UnitLabel`<sup>Required</sup> <a name="UnitLabel" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.unitLabel"></a>

```csharp
public string UnitLabel { get; }
```

- *Type:* string

---

##### `ValueKey`<sup>Required</sup> <a name="ValueKey" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.valueKey"></a>

```csharp
public string ValueKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitions</a>

---


### DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference <a name="DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationArn">DestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.metricDefinitions">MetricDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.destinationArn"></a>

```csharp
public string DestinationArn { get; }
```

- *Type:* string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.iamRoleArn"></a>

```csharp
public string IamRoleArn { get; }
```

- *Type:* string

---

##### `MetricDefinitions`<sup>Required</sup> <a name="MetricDefinitions" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.metricDefinitions"></a>

```csharp
public DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList MetricDefinitions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsMetricDefinitionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinations</a>

---


### DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference <a name="DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookies">AllowCookies</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.enableXRay">EnableXRay</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPages">ExcludedPages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePages">FavoritePages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArn">GuestRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolId">IdentityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.includedPages">IncludedPages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.metricDestinations">MetricDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRate">SessionSampleRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.telemetries">Telemetries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfiguration">DataAwsccRumAppMonitorAppMonitorConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowCookies`<sup>Required</sup> <a name="AllowCookies" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.allowCookies"></a>

```csharp
public IResolvable AllowCookies { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EnableXRay`<sup>Required</sup> <a name="EnableXRay" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.enableXRay"></a>

```csharp
public IResolvable EnableXRay { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ExcludedPages`<sup>Required</sup> <a name="ExcludedPages" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.excludedPages"></a>

```csharp
public string[] ExcludedPages { get; }
```

- *Type:* string[]

---

##### `FavoritePages`<sup>Required</sup> <a name="FavoritePages" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.favoritePages"></a>

```csharp
public string[] FavoritePages { get; }
```

- *Type:* string[]

---

##### `GuestRoleArn`<sup>Required</sup> <a name="GuestRoleArn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.guestRoleArn"></a>

```csharp
public string GuestRoleArn { get; }
```

- *Type:* string

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.identityPoolId"></a>

```csharp
public string IdentityPoolId { get; }
```

- *Type:* string

---

##### `IncludedPages`<sup>Required</sup> <a name="IncludedPages" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.includedPages"></a>

```csharp
public string[] IncludedPages { get; }
```

- *Type:* string[]

---

##### `MetricDestinations`<sup>Required</sup> <a name="MetricDestinations" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.metricDestinations"></a>

```csharp
public DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList MetricDestinations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList">DataAwsccRumAppMonitorAppMonitorConfigurationMetricDestinationsList</a>

---

##### `SessionSampleRate`<sup>Required</sup> <a name="SessionSampleRate" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.sessionSampleRate"></a>

```csharp
public double SessionSampleRate { get; }
```

- *Type:* double

---

##### `Telemetries`<sup>Required</sup> <a name="Telemetries" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.telemetries"></a>

```csharp
public string[] Telemetries { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRumAppMonitorAppMonitorConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorAppMonitorConfiguration">DataAwsccRumAppMonitorAppMonitorConfiguration</a>

---


### DataAwsccRumAppMonitorCustomEventsOutputReference <a name="DataAwsccRumAppMonitorCustomEventsOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRumAppMonitorCustomEventsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEvents">DataAwsccRumAppMonitorCustomEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEventsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRumAppMonitorCustomEvents InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorCustomEvents">DataAwsccRumAppMonitorCustomEvents</a>

---


### DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference <a name="DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps">DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMaps</a>

---


### DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference <a name="DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.javaScriptSourceMaps">JavaScriptSourceMaps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference">DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfiguration">DataAwsccRumAppMonitorDeobfuscationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JavaScriptSourceMaps`<sup>Required</sup> <a name="JavaScriptSourceMaps" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.javaScriptSourceMaps"></a>

```csharp
public DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference JavaScriptSourceMaps { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference">DataAwsccRumAppMonitorDeobfuscationConfigurationJavaScriptSourceMapsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRumAppMonitorDeobfuscationConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorDeobfuscationConfiguration">DataAwsccRumAppMonitorDeobfuscationConfiguration</a>

---


### DataAwsccRumAppMonitorResourcePolicyOutputReference <a name="DataAwsccRumAppMonitorResourcePolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRumAppMonitorResourcePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.policyDocument">PolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.policyRevisionId">PolicyRevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicy">DataAwsccRumAppMonitorResourcePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyDocument`<sup>Required</sup> <a name="PolicyDocument" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.policyDocument"></a>

```csharp
public string PolicyDocument { get; }
```

- *Type:* string

---

##### `PolicyRevisionId`<sup>Required</sup> <a name="PolicyRevisionId" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.policyRevisionId"></a>

```csharp
public string PolicyRevisionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRumAppMonitorResourcePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorResourcePolicy">DataAwsccRumAppMonitorResourcePolicy</a>

---


### DataAwsccRumAppMonitorTagsList <a name="DataAwsccRumAppMonitorTagsList" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRumAppMonitorTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.get"></a>

```csharp
private DataAwsccRumAppMonitorTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccRumAppMonitorTagsOutputReference <a name="DataAwsccRumAppMonitorTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRumAppMonitorTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTags">DataAwsccRumAppMonitorTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRumAppMonitorTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRumAppMonitor.DataAwsccRumAppMonitorTags">DataAwsccRumAppMonitorTags</a>

---



