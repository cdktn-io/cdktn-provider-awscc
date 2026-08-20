# `dataAwsccInspectorv2Connector` Submodule <a name="`dataAwsccInspectorv2Connector` Submodule" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccInspectorv2Connector <a name="DataAwsccInspectorv2Connector" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/inspectorv2_connector awscc_inspectorv2_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2Connector(Construct Scope, string Id, DataAwsccInspectorv2ConnectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig">DataAwsccInspectorv2ConnectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig">DataAwsccInspectorv2ConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccInspectorv2Connector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInspectorv2Connector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInspectorv2Connector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInspectorv2Connector.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccInspectorv2Connector.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccInspectorv2Connector resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccInspectorv2Connector to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccInspectorv2Connector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/inspectorv2_connector#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccInspectorv2Connector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.connectorArn">ConnectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.enablementStatus">EnablementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.enablementStatusReason">EnablementStatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.health">Health</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference">DataAwsccInspectorv2ConnectorHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.providerConfiguration">ProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList">DataAwsccInspectorv2ConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ConnectorArn`<sup>Required</sup> <a name="ConnectorArn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.connectorArn"></a>

```csharp
public string ConnectorArn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EnablementStatus`<sup>Required</sup> <a name="EnablementStatus" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.enablementStatus"></a>

```csharp
public string EnablementStatus { get; }
```

- *Type:* string

---

##### `EnablementStatusReason`<sup>Required</sup> <a name="EnablementStatusReason" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.enablementStatusReason"></a>

```csharp
public string EnablementStatusReason { get; }
```

- *Type:* string

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.health"></a>

```csharp
public DataAwsccInspectorv2ConnectorHealthOutputReference Health { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference">DataAwsccInspectorv2ConnectorHealthOutputReference</a>

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProviderConfiguration`<sup>Required</sup> <a name="ProviderConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.providerConfiguration"></a>

```csharp
public DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference ProviderConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference</a>

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.providerName"></a>

```csharp
public string ProviderName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.tags"></a>

```csharp
public DataAwsccInspectorv2ConnectorTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList">DataAwsccInspectorv2ConnectorTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccInspectorv2ConnectorConfig <a name="DataAwsccInspectorv2ConnectorConfig" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2ConnectorConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/inspectorv2_connector#id DataAwsccInspectorv2Connector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccInspectorv2ConnectorHealth <a name="DataAwsccInspectorv2ConnectorHealth" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealth.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2ConnectorHealth {

};
```


### DataAwsccInspectorv2ConnectorProviderConfiguration <a name="DataAwsccInspectorv2ConnectorProviderConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2ConnectorProviderConfiguration {

};
```


### DataAwsccInspectorv2ConnectorProviderConfigurationAzure <a name="DataAwsccInspectorv2ConnectorProviderConfigurationAzure" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzure.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2ConnectorProviderConfigurationAzure {

};
```


### DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration <a name="DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration {

};
```


### DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning <a name="DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning {

};
```


### DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning <a name="DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning {

};
```


### DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning <a name="DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning {

};
```


### DataAwsccInspectorv2ConnectorTags <a name="DataAwsccInspectorv2ConnectorTags" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2ConnectorTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccInspectorv2ConnectorHealthOutputReference <a name="DataAwsccInspectorv2ConnectorHealthOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2ConnectorHealthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.connectorStatus">ConnectorStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.lastCheckedAt">LastCheckedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealth">DataAwsccInspectorv2ConnectorHealth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectorStatus`<sup>Required</sup> <a name="ConnectorStatus" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.connectorStatus"></a>

```csharp
public string ConnectorStatus { get; }
```

- *Type:* string

---

##### `LastCheckedAt`<sup>Required</sup> <a name="LastCheckedAt" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.lastCheckedAt"></a>

```csharp
public string LastCheckedAt { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2ConnectorHealth InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealth">DataAwsccInspectorv2ConnectorHealth</a>

---


### DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference <a name="DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.autoInstallVmScanner">AutoInstallVmScanner</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.awsConfigConnectorArn">AwsConfigConnectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.azureRegions">AzureRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.scopeConfiguration">ScopeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzure">DataAwsccInspectorv2ConnectorProviderConfigurationAzure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoInstallVmScanner`<sup>Required</sup> <a name="AutoInstallVmScanner" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.autoInstallVmScanner"></a>

```csharp
public IResolvable AutoInstallVmScanner { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AwsConfigConnectorArn`<sup>Required</sup> <a name="AwsConfigConnectorArn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.awsConfigConnectorArn"></a>

```csharp
public string AwsConfigConnectorArn { get; }
```

- *Type:* string

---

##### `AzureRegions`<sup>Required</sup> <a name="AzureRegions" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.azureRegions"></a>

```csharp
public string[] AzureRegions { get; }
```

- *Type:* string[]

---

##### `ScopeConfiguration`<sup>Required</sup> <a name="ScopeConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.scopeConfiguration"></a>

```csharp
public DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference ScopeConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2ConnectorProviderConfigurationAzure InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzure">DataAwsccInspectorv2ConnectorProviderConfigurationAzure</a>

---


### DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference <a name="DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.scopeType">ScopeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.scopeValues">ScopeValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.stateReason">StateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScopeType`<sup>Required</sup> <a name="ScopeType" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.scopeType"></a>

```csharp
public string ScopeType { get; }
```

- *Type:* string

---

##### `ScopeValues`<sup>Required</sup> <a name="ScopeValues" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.scopeValues"></a>

```csharp
public string[] ScopeValues { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.stateReason"></a>

```csharp
public string StateReason { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning</a>

---


### DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference <a name="DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.containerImageScanning">ContainerImageScanning</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.serverlessScanning">ServerlessScanning</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.vmScanning">VmScanning</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerImageScanning`<sup>Required</sup> <a name="ContainerImageScanning" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.containerImageScanning"></a>

```csharp
public DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference ContainerImageScanning { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference</a>

---

##### `ServerlessScanning`<sup>Required</sup> <a name="ServerlessScanning" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.serverlessScanning"></a>

```csharp
public DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference ServerlessScanning { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference</a>

---

##### `VmScanning`<sup>Required</sup> <a name="VmScanning" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.vmScanning"></a>

```csharp
public DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference VmScanning { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration</a>

---


### DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference <a name="DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.scopeType">ScopeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.scopeValues">ScopeValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.stateReason">StateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScopeType`<sup>Required</sup> <a name="ScopeType" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.scopeType"></a>

```csharp
public string ScopeType { get; }
```

- *Type:* string

---

##### `ScopeValues`<sup>Required</sup> <a name="ScopeValues" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.scopeValues"></a>

```csharp
public string[] ScopeValues { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.stateReason"></a>

```csharp
public string StateReason { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning</a>

---


### DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference <a name="DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.scopeType">ScopeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.scopeValues">ScopeValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.stateReason">StateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScopeType`<sup>Required</sup> <a name="ScopeType" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.scopeType"></a>

```csharp
public string ScopeType { get; }
```

- *Type:* string

---

##### `ScopeValues`<sup>Required</sup> <a name="ScopeValues" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.scopeValues"></a>

```csharp
public string[] ScopeValues { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.stateReason"></a>

```csharp
public string StateReason { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning</a>

---


### DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference <a name="DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.property.azure">Azure</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfiguration">DataAwsccInspectorv2ConnectorProviderConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.property.azure"></a>

```csharp
public DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference Azure { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2ConnectorProviderConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfiguration">DataAwsccInspectorv2ConnectorProviderConfiguration</a>

---


### DataAwsccInspectorv2ConnectorTagsList <a name="DataAwsccInspectorv2ConnectorTagsList" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2ConnectorTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.get"></a>

```csharp
private DataAwsccInspectorv2ConnectorTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccInspectorv2ConnectorTagsOutputReference <a name="DataAwsccInspectorv2ConnectorTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccInspectorv2ConnectorTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTags">DataAwsccInspectorv2ConnectorTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccInspectorv2ConnectorTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTags">DataAwsccInspectorv2ConnectorTags</a>

---



