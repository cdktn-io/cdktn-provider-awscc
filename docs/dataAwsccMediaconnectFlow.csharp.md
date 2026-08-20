# `dataAwsccMediaconnectFlow` Submodule <a name="`dataAwsccMediaconnectFlow` Submodule" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMediaconnectFlow <a name="DataAwsccMediaconnectFlow" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/mediaconnect_flow awscc_mediaconnect_flow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlow(Construct Scope, string Id, DataAwsccMediaconnectFlowConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowConfig">DataAwsccMediaconnectFlowConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowConfig">DataAwsccMediaconnectFlowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMediaconnectFlow resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediaconnectFlow.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediaconnectFlow.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediaconnectFlow.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMediaconnectFlow.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccMediaconnectFlow resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMediaconnectFlow to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMediaconnectFlow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/mediaconnect_flow#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMediaconnectFlow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.egressIp">EgressIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.flowArn">FlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.flowAvailabilityZone">FlowAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.maintenance">Maintenance</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference">DataAwsccMediaconnectFlowMaintenanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.mediaStreams">MediaStreams</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList">DataAwsccMediaconnectFlowMediaStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference">DataAwsccMediaconnectFlowSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.sourceFailoverConfig">SourceFailoverConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference">DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.sourceMonitoringConfig">SourceMonitoringConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference">DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.vpcInterfaces">VpcInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList">DataAwsccMediaconnectFlowVpcInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `EgressIp`<sup>Required</sup> <a name="EgressIp" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.egressIp"></a>

```csharp
public string EgressIp { get; }
```

- *Type:* string

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.flowArn"></a>

```csharp
public string FlowArn { get; }
```

- *Type:* string

---

##### `FlowAvailabilityZone`<sup>Required</sup> <a name="FlowAvailabilityZone" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.flowAvailabilityZone"></a>

```csharp
public string FlowAvailabilityZone { get; }
```

- *Type:* string

---

##### `Maintenance`<sup>Required</sup> <a name="Maintenance" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.maintenance"></a>

```csharp
public DataAwsccMediaconnectFlowMaintenanceOutputReference Maintenance { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference">DataAwsccMediaconnectFlowMaintenanceOutputReference</a>

---

##### `MediaStreams`<sup>Required</sup> <a name="MediaStreams" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.mediaStreams"></a>

```csharp
public DataAwsccMediaconnectFlowMediaStreamsList MediaStreams { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList">DataAwsccMediaconnectFlowMediaStreamsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.source"></a>

```csharp
public DataAwsccMediaconnectFlowSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference">DataAwsccMediaconnectFlowSourceOutputReference</a>

---

##### `SourceFailoverConfig`<sup>Required</sup> <a name="SourceFailoverConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.sourceFailoverConfig"></a>

```csharp
public DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference SourceFailoverConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference">DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference</a>

---

##### `SourceMonitoringConfig`<sup>Required</sup> <a name="SourceMonitoringConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.sourceMonitoringConfig"></a>

```csharp
public DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference SourceMonitoringConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference">DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference</a>

---

##### `VpcInterfaces`<sup>Required</sup> <a name="VpcInterfaces" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.vpcInterfaces"></a>

```csharp
public DataAwsccMediaconnectFlowVpcInterfacesList VpcInterfaces { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList">DataAwsccMediaconnectFlowVpcInterfacesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlow.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMediaconnectFlowConfig <a name="DataAwsccMediaconnectFlowConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/mediaconnect_flow#id DataAwsccMediaconnectFlow#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMediaconnectFlowMaintenance <a name="DataAwsccMediaconnectFlowMaintenance" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowMaintenance {

};
```


### DataAwsccMediaconnectFlowMediaStreams <a name="DataAwsccMediaconnectFlowMediaStreams" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowMediaStreams {

};
```


### DataAwsccMediaconnectFlowMediaStreamsAttributes <a name="DataAwsccMediaconnectFlowMediaStreamsAttributes" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowMediaStreamsAttributes {

};
```


### DataAwsccMediaconnectFlowMediaStreamsAttributesFmtp <a name="DataAwsccMediaconnectFlowMediaStreamsAttributesFmtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowMediaStreamsAttributesFmtp {

};
```


### DataAwsccMediaconnectFlowSource <a name="DataAwsccMediaconnectFlowSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSource {

};
```


### DataAwsccMediaconnectFlowSourceDecryption <a name="DataAwsccMediaconnectFlowSourceDecryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceDecryption {

};
```


### DataAwsccMediaconnectFlowSourceFailoverConfig <a name="DataAwsccMediaconnectFlowSourceFailoverConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceFailoverConfig {

};
```


### DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriority <a name="DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriority" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriority.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriority {

};
```


### DataAwsccMediaconnectFlowSourceGatewayBridgeSource <a name="DataAwsccMediaconnectFlowSourceGatewayBridgeSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceGatewayBridgeSource {

};
```


### DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment <a name="DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment {

};
```


### DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurations <a name="DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurations" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurations {

};
```


### DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations <a name="DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations {

};
```


### DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface <a name="DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface {

};
```


### DataAwsccMediaconnectFlowSourceMonitoringConfig <a name="DataAwsccMediaconnectFlowSourceMonitoringConfig" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceMonitoringConfig {

};
```


### DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings <a name="DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings {

};
```


### DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio <a name="DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio {

};
```


### DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings <a name="DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings {

};
```


### DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames <a name="DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames {

};
```


### DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames <a name="DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames {

};
```


### DataAwsccMediaconnectFlowVpcInterfaces <a name="DataAwsccMediaconnectFlowVpcInterfaces" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfaces.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowVpcInterfaces {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMediaconnectFlowMaintenanceOutputReference <a name="DataAwsccMediaconnectFlowMaintenanceOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowMaintenanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.property.maintenanceDay">MaintenanceDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.property.maintenanceStartHour">MaintenanceStartHour</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenance">DataAwsccMediaconnectFlowMaintenance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaintenanceDay`<sup>Required</sup> <a name="MaintenanceDay" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.property.maintenanceDay"></a>

```csharp
public string MaintenanceDay { get; }
```

- *Type:* string

---

##### `MaintenanceStartHour`<sup>Required</sup> <a name="MaintenanceStartHour" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.property.maintenanceStartHour"></a>

```csharp
public string MaintenanceStartHour { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenanceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectFlowMaintenance InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMaintenance">DataAwsccMediaconnectFlowMaintenance</a>

---


### DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference <a name="DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.channelOrder">ChannelOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.colorimetry">Colorimetry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.exactFramerate">ExactFramerate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.par">Par</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.range">Range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.scanMode">ScanMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.tcs">Tcs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtp">DataAwsccMediaconnectFlowMediaStreamsAttributesFmtp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChannelOrder`<sup>Required</sup> <a name="ChannelOrder" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.channelOrder"></a>

```csharp
public string ChannelOrder { get; }
```

- *Type:* string

---

##### `Colorimetry`<sup>Required</sup> <a name="Colorimetry" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.colorimetry"></a>

```csharp
public string Colorimetry { get; }
```

- *Type:* string

---

##### `ExactFramerate`<sup>Required</sup> <a name="ExactFramerate" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.exactFramerate"></a>

```csharp
public string ExactFramerate { get; }
```

- *Type:* string

---

##### `Par`<sup>Required</sup> <a name="Par" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.par"></a>

```csharp
public string Par { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.range"></a>

```csharp
public string Range { get; }
```

- *Type:* string

---

##### `ScanMode`<sup>Required</sup> <a name="ScanMode" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.scanMode"></a>

```csharp
public string ScanMode { get; }
```

- *Type:* string

---

##### `Tcs`<sup>Required</sup> <a name="Tcs" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.tcs"></a>

```csharp
public string Tcs { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectFlowMediaStreamsAttributesFmtp InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtp">DataAwsccMediaconnectFlowMediaStreamsAttributesFmtp</a>

---


### DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference <a name="DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.property.fmtp">Fmtp</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference">DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.property.lang">Lang</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributes">DataAwsccMediaconnectFlowMediaStreamsAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fmtp`<sup>Required</sup> <a name="Fmtp" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.property.fmtp"></a>

```csharp
public DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference Fmtp { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference">DataAwsccMediaconnectFlowMediaStreamsAttributesFmtpOutputReference</a>

---

##### `Lang`<sup>Required</sup> <a name="Lang" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.property.lang"></a>

```csharp
public string Lang { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectFlowMediaStreamsAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributes">DataAwsccMediaconnectFlowMediaStreamsAttributes</a>

---


### DataAwsccMediaconnectFlowMediaStreamsList <a name="DataAwsccMediaconnectFlowMediaStreamsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowMediaStreamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.get"></a>

```csharp
private DataAwsccMediaconnectFlowMediaStreamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediaconnectFlowMediaStreamsOutputReference <a name="DataAwsccMediaconnectFlowMediaStreamsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowMediaStreamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference">DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.property.clockRate">ClockRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.property.fmt">Fmt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.property.mediaStreamId">MediaStreamId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.property.mediaStreamName">MediaStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.property.mediaStreamType">MediaStreamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.property.videoFormat">VideoFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreams">DataAwsccMediaconnectFlowMediaStreams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.property.attributes"></a>

```csharp
public DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference Attributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference">DataAwsccMediaconnectFlowMediaStreamsAttributesOutputReference</a>

---

##### `ClockRate`<sup>Required</sup> <a name="ClockRate" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.property.clockRate"></a>

```csharp
public double ClockRate { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Fmt`<sup>Required</sup> <a name="Fmt" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.property.fmt"></a>

```csharp
public double Fmt { get; }
```

- *Type:* double

---

##### `MediaStreamId`<sup>Required</sup> <a name="MediaStreamId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.property.mediaStreamId"></a>

```csharp
public double MediaStreamId { get; }
```

- *Type:* double

---

##### `MediaStreamName`<sup>Required</sup> <a name="MediaStreamName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.property.mediaStreamName"></a>

```csharp
public string MediaStreamName { get; }
```

- *Type:* string

---

##### `MediaStreamType`<sup>Required</sup> <a name="MediaStreamType" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.property.mediaStreamType"></a>

```csharp
public string MediaStreamType { get; }
```

- *Type:* string

---

##### `VideoFormat`<sup>Required</sup> <a name="VideoFormat" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.property.videoFormat"></a>

```csharp
public string VideoFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreamsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectFlowMediaStreams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowMediaStreams">DataAwsccMediaconnectFlowMediaStreams</a>

---


### DataAwsccMediaconnectFlowSourceDecryptionOutputReference <a name="DataAwsccMediaconnectFlowSourceDecryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceDecryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.constantInitializationVector">ConstantInitializationVector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.deviceId">DeviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryption">DataAwsccMediaconnectFlowSourceDecryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `ConstantInitializationVector`<sup>Required</sup> <a name="ConstantInitializationVector" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.constantInitializationVector"></a>

```csharp
public string ConstantInitializationVector { get; }
```

- *Type:* string

---

##### `DeviceId`<sup>Required</sup> <a name="DeviceId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.deviceId"></a>

```csharp
public string DeviceId { get; }
```

- *Type:* string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectFlowSourceDecryption InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryption">DataAwsccMediaconnectFlowSourceDecryption</a>

---


### DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference <a name="DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.property.failoverMode">FailoverMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.property.recoveryWindow">RecoveryWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.property.sourcePriority">SourcePriority</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference">DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfig">DataAwsccMediaconnectFlowSourceFailoverConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FailoverMode`<sup>Required</sup> <a name="FailoverMode" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.property.failoverMode"></a>

```csharp
public string FailoverMode { get; }
```

- *Type:* string

---

##### `RecoveryWindow`<sup>Required</sup> <a name="RecoveryWindow" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.property.recoveryWindow"></a>

```csharp
public double RecoveryWindow { get; }
```

- *Type:* double

---

##### `SourcePriority`<sup>Required</sup> <a name="SourcePriority" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.property.sourcePriority"></a>

```csharp
public DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference SourcePriority { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference">DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectFlowSourceFailoverConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfig">DataAwsccMediaconnectFlowSourceFailoverConfig</a>

---


### DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference <a name="DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.primarySource">PrimarySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriority">DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriority</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrimarySource`<sup>Required</sup> <a name="PrimarySource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.primarySource"></a>

```csharp
public string PrimarySource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriority InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriority">DataAwsccMediaconnectFlowSourceFailoverConfigSourcePriority</a>

---


### DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference <a name="DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.bridgeArn">BridgeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.vpcInterfaceAttachment">VpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference">DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSource">DataAwsccMediaconnectFlowSourceGatewayBridgeSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BridgeArn`<sup>Required</sup> <a name="BridgeArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.bridgeArn"></a>

```csharp
public string BridgeArn { get; }
```

- *Type:* string

---

##### `VpcInterfaceAttachment`<sup>Required</sup> <a name="VpcInterfaceAttachment" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.vpcInterfaceAttachment"></a>

```csharp
public DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference VpcInterfaceAttachment { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference">DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectFlowSourceGatewayBridgeSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSource">DataAwsccMediaconnectFlowSourceGatewayBridgeSource</a>

---


### DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference <a name="DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName">VpcInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcInterfaceName`<sup>Required</sup> <a name="VpcInterfaceName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName"></a>

```csharp
public string VpcInterfaceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">DataAwsccMediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a>

---


### DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference <a name="DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a>

---


### DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList <a name="DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.get"></a>

```csharp
private DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference <a name="DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.inputPort">InputPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.interface">Interface</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference">DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputPort`<sup>Required</sup> <a name="InputPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.inputPort"></a>

```csharp
public double InputPort { get; }
```

- *Type:* double

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.interface"></a>

```csharp
public DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference Interface { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference">DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>

---


### DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList <a name="DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.get"></a>

```csharp
private DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference <a name="DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.encodingName">EncodingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.inputConfigurations">InputConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList">DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.mediaStreamName">MediaStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurations">DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncodingName`<sup>Required</sup> <a name="EncodingName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.encodingName"></a>

```csharp
public string EncodingName { get; }
```

- *Type:* string

---

##### `InputConfigurations`<sup>Required</sup> <a name="InputConfigurations" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.inputConfigurations"></a>

```csharp
public DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList InputConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList">DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList</a>

---

##### `MediaStreamName`<sup>Required</sup> <a name="MediaStreamName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.mediaStreamName"></a>

```csharp
public string MediaStreamName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurations">DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurations</a>

---


### DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList <a name="DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.get"></a>

```csharp
private DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference <a name="DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.silentAudio">SilentAudio</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference">DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SilentAudio`<sup>Required</sup> <a name="SilentAudio" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.silentAudio"></a>

```csharp
public DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference SilentAudio { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference">DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>

---


### DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference <a name="DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.thresholdSeconds">ThresholdSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `ThresholdSeconds`<sup>Required</sup> <a name="ThresholdSeconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.thresholdSeconds"></a>

```csharp
public double ThresholdSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a>

---


### DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference <a name="DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.property.audioMonitoringSettings">AudioMonitoringSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList">DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.property.contentQualityAnalysisState">ContentQualityAnalysisState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.property.thumbnailState">ThumbnailState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.property.videoMonitoringSettings">VideoMonitoringSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList">DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfig">DataAwsccMediaconnectFlowSourceMonitoringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudioMonitoringSettings`<sup>Required</sup> <a name="AudioMonitoringSettings" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.property.audioMonitoringSettings"></a>

```csharp
public DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList AudioMonitoringSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList">DataAwsccMediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList</a>

---

##### `ContentQualityAnalysisState`<sup>Required</sup> <a name="ContentQualityAnalysisState" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.property.contentQualityAnalysisState"></a>

```csharp
public string ContentQualityAnalysisState { get; }
```

- *Type:* string

---

##### `ThumbnailState`<sup>Required</sup> <a name="ThumbnailState" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.property.thumbnailState"></a>

```csharp
public string ThumbnailState { get; }
```

- *Type:* string

---

##### `VideoMonitoringSettings`<sup>Required</sup> <a name="VideoMonitoringSettings" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.property.videoMonitoringSettings"></a>

```csharp
public DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList VideoMonitoringSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList">DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectFlowSourceMonitoringConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfig">DataAwsccMediaconnectFlowSourceMonitoringConfig</a>

---


### DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference <a name="DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.thresholdSeconds">ThresholdSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `ThresholdSeconds`<sup>Required</sup> <a name="ThresholdSeconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.thresholdSeconds"></a>

```csharp
public double ThresholdSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a>

---


### DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference <a name="DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.thresholdSeconds">ThresholdSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `ThresholdSeconds`<sup>Required</sup> <a name="ThresholdSeconds" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.thresholdSeconds"></a>

```csharp
public double ThresholdSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a>

---


### DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList <a name="DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.get"></a>

```csharp
private DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference <a name="DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.blackFrames">BlackFrames</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference">DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.frozenFrames">FrozenFrames</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference">DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlackFrames`<sup>Required</sup> <a name="BlackFrames" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.blackFrames"></a>

```csharp
public DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference BlackFrames { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference">DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference</a>

---

##### `FrozenFrames`<sup>Required</sup> <a name="FrozenFrames" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.frozenFrames"></a>

```csharp
public DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference FrozenFrames { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference">DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">DataAwsccMediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>

---


### DataAwsccMediaconnectFlowSourceOutputReference <a name="DataAwsccMediaconnectFlowSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.decryption">Decryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference">DataAwsccMediaconnectFlowSourceDecryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.entitlementArn">EntitlementArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.gatewayBridgeSource">GatewayBridgeSource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference">DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.ingestIp">IngestIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.ingestPort">IngestPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.maxBitrate">MaxBitrate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.maxLatency">MaxLatency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.maxSyncBuffer">MaxSyncBuffer</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.mediaStreamSourceConfigurations">MediaStreamSourceConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList">DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.minLatency">MinLatency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.senderControlPort">SenderControlPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.senderIpAddress">SenderIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.sourceArn">SourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.sourceIngestPort">SourceIngestPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.sourceListenerAddress">SourceListenerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.sourceListenerPort">SourceListenerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.streamId">StreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.vpcInterfaceName">VpcInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.whitelistCidr">WhitelistCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSource">DataAwsccMediaconnectFlowSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Decryption`<sup>Required</sup> <a name="Decryption" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.decryption"></a>

```csharp
public DataAwsccMediaconnectFlowSourceDecryptionOutputReference Decryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceDecryptionOutputReference">DataAwsccMediaconnectFlowSourceDecryptionOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EntitlementArn`<sup>Required</sup> <a name="EntitlementArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.entitlementArn"></a>

```csharp
public string EntitlementArn { get; }
```

- *Type:* string

---

##### `GatewayBridgeSource`<sup>Required</sup> <a name="GatewayBridgeSource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.gatewayBridgeSource"></a>

```csharp
public DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference GatewayBridgeSource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference">DataAwsccMediaconnectFlowSourceGatewayBridgeSourceOutputReference</a>

---

##### `IngestIp`<sup>Required</sup> <a name="IngestIp" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.ingestIp"></a>

```csharp
public string IngestIp { get; }
```

- *Type:* string

---

##### `IngestPort`<sup>Required</sup> <a name="IngestPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.ingestPort"></a>

```csharp
public double IngestPort { get; }
```

- *Type:* double

---

##### `MaxBitrate`<sup>Required</sup> <a name="MaxBitrate" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.maxBitrate"></a>

```csharp
public double MaxBitrate { get; }
```

- *Type:* double

---

##### `MaxLatency`<sup>Required</sup> <a name="MaxLatency" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.maxLatency"></a>

```csharp
public double MaxLatency { get; }
```

- *Type:* double

---

##### `MaxSyncBuffer`<sup>Required</sup> <a name="MaxSyncBuffer" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.maxSyncBuffer"></a>

```csharp
public double MaxSyncBuffer { get; }
```

- *Type:* double

---

##### `MediaStreamSourceConfigurations`<sup>Required</sup> <a name="MediaStreamSourceConfigurations" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.mediaStreamSourceConfigurations"></a>

```csharp
public DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList MediaStreamSourceConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList">DataAwsccMediaconnectFlowSourceMediaStreamSourceConfigurationsList</a>

---

##### `MinLatency`<sup>Required</sup> <a name="MinLatency" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.minLatency"></a>

```csharp
public double MinLatency { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SenderControlPort`<sup>Required</sup> <a name="SenderControlPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.senderControlPort"></a>

```csharp
public double SenderControlPort { get; }
```

- *Type:* double

---

##### `SenderIpAddress`<sup>Required</sup> <a name="SenderIpAddress" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.senderIpAddress"></a>

```csharp
public string SenderIpAddress { get; }
```

- *Type:* string

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.sourceArn"></a>

```csharp
public string SourceArn { get; }
```

- *Type:* string

---

##### `SourceIngestPort`<sup>Required</sup> <a name="SourceIngestPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.sourceIngestPort"></a>

```csharp
public string SourceIngestPort { get; }
```

- *Type:* string

---

##### `SourceListenerAddress`<sup>Required</sup> <a name="SourceListenerAddress" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.sourceListenerAddress"></a>

```csharp
public string SourceListenerAddress { get; }
```

- *Type:* string

---

##### `SourceListenerPort`<sup>Required</sup> <a name="SourceListenerPort" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.sourceListenerPort"></a>

```csharp
public double SourceListenerPort { get; }
```

- *Type:* double

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.streamId"></a>

```csharp
public string StreamId { get; }
```

- *Type:* string

---

##### `VpcInterfaceName`<sup>Required</sup> <a name="VpcInterfaceName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.vpcInterfaceName"></a>

```csharp
public string VpcInterfaceName { get; }
```

- *Type:* string

---

##### `WhitelistCidr`<sup>Required</sup> <a name="WhitelistCidr" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.whitelistCidr"></a>

```csharp
public string WhitelistCidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectFlowSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowSource">DataAwsccMediaconnectFlowSource</a>

---


### DataAwsccMediaconnectFlowVpcInterfacesList <a name="DataAwsccMediaconnectFlowVpcInterfacesList" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowVpcInterfacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.get"></a>

```csharp
private DataAwsccMediaconnectFlowVpcInterfacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccMediaconnectFlowVpcInterfacesOutputReference <a name="DataAwsccMediaconnectFlowVpcInterfacesOutputReference" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMediaconnectFlowVpcInterfacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceType">NetworkInterfaceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfaces">DataAwsccMediaconnectFlowVpcInterfaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceIds"></a>

```csharp
public string[] NetworkInterfaceIds { get; }
```

- *Type:* string[]

---

##### `NetworkInterfaceType`<sup>Required</sup> <a name="NetworkInterfaceType" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceType"></a>

```csharp
public string NetworkInterfaceType { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfacesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMediaconnectFlowVpcInterfaces InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMediaconnectFlow.DataAwsccMediaconnectFlowVpcInterfaces">DataAwsccMediaconnectFlowVpcInterfaces</a>

---



