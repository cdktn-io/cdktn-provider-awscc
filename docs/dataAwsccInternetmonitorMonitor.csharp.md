# `dataAwsccInternetmonitorMonitor` Submodule <a name="`dataAwsccInternetmonitorMonitor` Submodule" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccInternetmonitorMonitor <a name="DataAwsccInternetmonitorMonitor" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/internetmonitor_monitor awscc_internetmonitor_monitor}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInternetmonitorMonitor(Construct Scope, string Id, DataAwsccInternetmonitorMonitorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig">DataAwsccInternetmonitorMonitorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig">DataAwsccInternetmonitorMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccInternetmonitorMonitor resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInternetmonitorMonitor.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInternetmonitorMonitor.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInternetmonitorMonitor.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInternetmonitorMonitor.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccInternetmonitorMonitor resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccInternetmonitorMonitor to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccInternetmonitorMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/internetmonitor_monitor#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccInternetmonitorMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.healthEventsConfig">HealthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference">DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.includeLinkedAccounts">IncludeLinkedAccounts</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.internetMeasurementsLogDelivery">InternetMeasurementsLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference">DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.linkedAccountId">LinkedAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.maxCityNetworksToMonitor">MaxCityNetworksToMonitor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.monitorArn">MonitorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.monitorName">MonitorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.processingStatus">ProcessingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.processingStatusInfo">ProcessingStatusInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.resourcesToAdd">ResourcesToAdd</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.resourcesToRemove">ResourcesToRemove</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList">DataAwsccInternetmonitorMonitorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.trafficPercentageToMonitor">TrafficPercentageToMonitor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `HealthEventsConfig`<sup>Required</sup> <a name="HealthEventsConfig" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.healthEventsConfig"></a>

```csharp
public DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference HealthEventsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference">DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference</a>

---

##### `IncludeLinkedAccounts`<sup>Required</sup> <a name="IncludeLinkedAccounts" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.includeLinkedAccounts"></a>

```csharp
public IResolvable IncludeLinkedAccounts { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternetMeasurementsLogDelivery`<sup>Required</sup> <a name="InternetMeasurementsLogDelivery" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.internetMeasurementsLogDelivery"></a>

```csharp
public DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference InternetMeasurementsLogDelivery { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference">DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference</a>

---

##### `LinkedAccountId`<sup>Required</sup> <a name="LinkedAccountId" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.linkedAccountId"></a>

```csharp
public string LinkedAccountId { get; }
```

- *Type:* string

---

##### `MaxCityNetworksToMonitor`<sup>Required</sup> <a name="MaxCityNetworksToMonitor" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.maxCityNetworksToMonitor"></a>

```csharp
public double MaxCityNetworksToMonitor { get; }
```

- *Type:* double

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `MonitorArn`<sup>Required</sup> <a name="MonitorArn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.monitorArn"></a>

```csharp
public string MonitorArn { get; }
```

- *Type:* string

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.monitorName"></a>

```csharp
public string MonitorName { get; }
```

- *Type:* string

---

##### `ProcessingStatus`<sup>Required</sup> <a name="ProcessingStatus" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.processingStatus"></a>

```csharp
public string ProcessingStatus { get; }
```

- *Type:* string

---

##### `ProcessingStatusInfo`<sup>Required</sup> <a name="ProcessingStatusInfo" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.processingStatusInfo"></a>

```csharp
public string ProcessingStatusInfo { get; }
```

- *Type:* string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `ResourcesToAdd`<sup>Required</sup> <a name="ResourcesToAdd" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.resourcesToAdd"></a>

```csharp
public string[] ResourcesToAdd { get; }
```

- *Type:* string[]

---

##### `ResourcesToRemove`<sup>Required</sup> <a name="ResourcesToRemove" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.resourcesToRemove"></a>

```csharp
public string[] ResourcesToRemove { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.tags"></a>

```csharp
public DataAwsccInternetmonitorMonitorTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList">DataAwsccInternetmonitorMonitorTagsList</a>

---

##### `TrafficPercentageToMonitor`<sup>Required</sup> <a name="TrafficPercentageToMonitor" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.trafficPercentageToMonitor"></a>

```csharp
public double TrafficPercentageToMonitor { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitor.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccInternetmonitorMonitorConfig <a name="DataAwsccInternetmonitorMonitorConfig" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInternetmonitorMonitorConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/internetmonitor_monitor#id DataAwsccInternetmonitorMonitor#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccInternetmonitorMonitorHealthEventsConfig <a name="DataAwsccInternetmonitorMonitorHealthEventsConfig" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInternetmonitorMonitorHealthEventsConfig {

};
```


### DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig <a name="DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig {

};
```


### DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig <a name="DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig {

};
```


### DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery <a name="DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery {

};
```


### DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config <a name="DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config {

};
```


### DataAwsccInternetmonitorMonitorTags <a name="DataAwsccInternetmonitorMonitorTags" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInternetmonitorMonitorTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference <a name="DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.healthScoreThreshold">HealthScoreThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.minTrafficImpact">MinTrafficImpact</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig">DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthScoreThreshold`<sup>Required</sup> <a name="HealthScoreThreshold" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.healthScoreThreshold"></a>

```csharp
public double HealthScoreThreshold { get; }
```

- *Type:* double

---

##### `MinTrafficImpact`<sup>Required</sup> <a name="MinTrafficImpact" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.minTrafficImpact"></a>

```csharp
public double MinTrafficImpact { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig">DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfig</a>

---


### DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference <a name="DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityLocalHealthEventsConfig">AvailabilityLocalHealthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference">DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThreshold">AvailabilityScoreThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceLocalHealthEventsConfig">PerformanceLocalHealthEventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference">DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThreshold">PerformanceScoreThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfig">DataAwsccInternetmonitorMonitorHealthEventsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityLocalHealthEventsConfig`<sup>Required</sup> <a name="AvailabilityLocalHealthEventsConfig" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityLocalHealthEventsConfig"></a>

```csharp
public DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference AvailabilityLocalHealthEventsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference">DataAwsccInternetmonitorMonitorHealthEventsConfigAvailabilityLocalHealthEventsConfigOutputReference</a>

---

##### `AvailabilityScoreThreshold`<sup>Required</sup> <a name="AvailabilityScoreThreshold" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.availabilityScoreThreshold"></a>

```csharp
public double AvailabilityScoreThreshold { get; }
```

- *Type:* double

---

##### `PerformanceLocalHealthEventsConfig`<sup>Required</sup> <a name="PerformanceLocalHealthEventsConfig" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceLocalHealthEventsConfig"></a>

```csharp
public DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference PerformanceLocalHealthEventsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference">DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference</a>

---

##### `PerformanceScoreThreshold`<sup>Required</sup> <a name="PerformanceScoreThreshold" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.performanceScoreThreshold"></a>

```csharp
public double PerformanceScoreThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInternetmonitorMonitorHealthEventsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfig">DataAwsccInternetmonitorMonitorHealthEventsConfig</a>

---


### DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference <a name="DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.healthScoreThreshold">HealthScoreThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.minTrafficImpact">MinTrafficImpact</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig">DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthScoreThreshold`<sup>Required</sup> <a name="HealthScoreThreshold" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.healthScoreThreshold"></a>

```csharp
public double HealthScoreThreshold { get; }
```

- *Type:* double

---

##### `MinTrafficImpact`<sup>Required</sup> <a name="MinTrafficImpact" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.minTrafficImpact"></a>

```csharp
public double MinTrafficImpact { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig">DataAwsccInternetmonitorMonitorHealthEventsConfigPerformanceLocalHealthEventsConfig</a>

---


### DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference <a name="DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3Config">S3Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference">DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery">DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Config`<sup>Required</sup> <a name="S3Config" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.s3Config"></a>

```csharp
public DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference S3Config { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference">DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery">DataAwsccInternetmonitorMonitorInternetMeasurementsLogDelivery</a>

---


### DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference <a name="DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatus">LogDeliveryStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; }
```

- *Type:* string

---

##### `LogDeliveryStatus`<sup>Required</sup> <a name="LogDeliveryStatus" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.logDeliveryStatus"></a>

```csharp
public string LogDeliveryStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3ConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config">DataAwsccInternetmonitorMonitorInternetMeasurementsLogDeliveryS3Config</a>

---


### DataAwsccInternetmonitorMonitorTagsList <a name="DataAwsccInternetmonitorMonitorTagsList" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInternetmonitorMonitorTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.get"></a>

```csharp
private DataAwsccInternetmonitorMonitorTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccInternetmonitorMonitorTagsOutputReference <a name="DataAwsccInternetmonitorMonitorTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInternetmonitorMonitorTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTags">DataAwsccInternetmonitorMonitorTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInternetmonitorMonitorTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInternetmonitorMonitor.DataAwsccInternetmonitorMonitorTags">DataAwsccInternetmonitorMonitorTags</a>

---



