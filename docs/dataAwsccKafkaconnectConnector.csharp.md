# `dataAwsccKafkaconnectConnector` Submodule <a name="`dataAwsccKafkaconnectConnector` Submodule" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccKafkaconnectConnector <a name="DataAwsccKafkaconnectConnector" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/kafkaconnect_connector awscc_kafkaconnect_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnector(Construct Scope, string Id, DataAwsccKafkaconnectConnectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig">DataAwsccKafkaconnectConnectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig">DataAwsccKafkaconnectConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccKafkaconnectConnector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccKafkaconnectConnector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccKafkaconnectConnector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccKafkaconnectConnector.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccKafkaconnectConnector.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccKafkaconnectConnector resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccKafkaconnectConnector to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccKafkaconnectConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/kafkaconnect_connector#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccKafkaconnectConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.capacity">Capacity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference">DataAwsccKafkaconnectConnectorCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorArn">ConnectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorConfiguration">ConnectorConfiguration</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorDescription">ConnectorDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorName">ConnectorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaCluster">KafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaClusterClientAuthentication">KafkaClusterClientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaClusterEncryptionInTransit">KafkaClusterEncryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaConnectVersion">KafkaConnectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.logDelivery">LogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.plugins">Plugins</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList">DataAwsccKafkaconnectConnectorPluginsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.serviceExecutionRoleArn">ServiceExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList">DataAwsccKafkaconnectConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.workerConfiguration">WorkerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference">DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.capacity"></a>

```csharp
public DataAwsccKafkaconnectConnectorCapacityOutputReference Capacity { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference">DataAwsccKafkaconnectConnectorCapacityOutputReference</a>

---

##### `ConnectorArn`<sup>Required</sup> <a name="ConnectorArn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorArn"></a>

```csharp
public string ConnectorArn { get; }
```

- *Type:* string

---

##### `ConnectorConfiguration`<sup>Required</sup> <a name="ConnectorConfiguration" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorConfiguration"></a>

```csharp
public StringMap ConnectorConfiguration { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `ConnectorDescription`<sup>Required</sup> <a name="ConnectorDescription" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorDescription"></a>

```csharp
public string ConnectorDescription { get; }
```

- *Type:* string

---

##### `ConnectorName`<sup>Required</sup> <a name="ConnectorName" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.connectorName"></a>

```csharp
public string ConnectorName { get; }
```

- *Type:* string

---

##### `KafkaCluster`<sup>Required</sup> <a name="KafkaCluster" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaCluster"></a>

```csharp
public DataAwsccKafkaconnectConnectorKafkaClusterOutputReference KafkaCluster { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterOutputReference</a>

---

##### `KafkaClusterClientAuthentication`<sup>Required</sup> <a name="KafkaClusterClientAuthentication" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaClusterClientAuthentication"></a>

```csharp
public DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference KafkaClusterClientAuthentication { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference</a>

---

##### `KafkaClusterEncryptionInTransit`<sup>Required</sup> <a name="KafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaClusterEncryptionInTransit"></a>

```csharp
public DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference KafkaClusterEncryptionInTransit { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a>

---

##### `KafkaConnectVersion`<sup>Required</sup> <a name="KafkaConnectVersion" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.kafkaConnectVersion"></a>

```csharp
public string KafkaConnectVersion { get; }
```

- *Type:* string

---

##### `LogDelivery`<sup>Required</sup> <a name="LogDelivery" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.logDelivery"></a>

```csharp
public DataAwsccKafkaconnectConnectorLogDeliveryOutputReference LogDelivery { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryOutputReference</a>

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `Plugins`<sup>Required</sup> <a name="Plugins" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.plugins"></a>

```csharp
public DataAwsccKafkaconnectConnectorPluginsList Plugins { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList">DataAwsccKafkaconnectConnectorPluginsList</a>

---

##### `ServiceExecutionRoleArn`<sup>Required</sup> <a name="ServiceExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.serviceExecutionRoleArn"></a>

```csharp
public string ServiceExecutionRoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.tags"></a>

```csharp
public DataAwsccKafkaconnectConnectorTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList">DataAwsccKafkaconnectConnectorTagsList</a>

---

##### `WorkerConfiguration`<sup>Required</sup> <a name="WorkerConfiguration" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.workerConfiguration"></a>

```csharp
public DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference WorkerConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference">DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccKafkaconnectConnectorCapacity <a name="DataAwsccKafkaconnectConnectorCapacity" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorCapacity {

};
```


### DataAwsccKafkaconnectConnectorCapacityAutoScaling <a name="DataAwsccKafkaconnectConnectorCapacityAutoScaling" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScaling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorCapacityAutoScaling {

};
```


### DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy <a name="DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy {

};
```


### DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy <a name="DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy {

};
```


### DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity <a name="DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity {

};
```


### DataAwsccKafkaconnectConnectorConfig <a name="DataAwsccKafkaconnectConnectorConfig" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/kafkaconnect_connector#id DataAwsccKafkaconnectConnector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccKafkaconnectConnectorKafkaCluster <a name="DataAwsccKafkaconnectConnectorKafkaCluster" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorKafkaCluster {

};
```


### DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster <a name="DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster {

};
```


### DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc <a name="DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc {

};
```


### DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication <a name="DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication {

};
```


### DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit <a name="DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit {

};
```


### DataAwsccKafkaconnectConnectorLogDelivery <a name="DataAwsccKafkaconnectConnectorLogDelivery" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDelivery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorLogDelivery {

};
```


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery {

};
```


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs {

};
```


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose {

};
```


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 {

};
```


### DataAwsccKafkaconnectConnectorPlugins <a name="DataAwsccKafkaconnectConnectorPlugins" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPlugins"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPlugins.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorPlugins {

};
```


### DataAwsccKafkaconnectConnectorPluginsCustomPlugin <a name="DataAwsccKafkaconnectConnectorPluginsCustomPlugin" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPlugin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPlugin.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorPluginsCustomPlugin {

};
```


### DataAwsccKafkaconnectConnectorTags <a name="DataAwsccKafkaconnectConnectorTags" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorTags {

};
```


### DataAwsccKafkaconnectConnectorWorkerConfiguration <a name="DataAwsccKafkaconnectConnectorWorkerConfiguration" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorWorkerConfiguration {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference <a name="DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCount">MaxAutoscalingTaskCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCount">MaxWorkerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCount">McuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCount">MinWorkerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicy">ScaleInPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicy">ScaleOutPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScaling">DataAwsccKafkaconnectConnectorCapacityAutoScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxAutoscalingTaskCount`<sup>Required</sup> <a name="MaxAutoscalingTaskCount" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCount"></a>

```csharp
public double MaxAutoscalingTaskCount { get; }
```

- *Type:* double

---

##### `MaxWorkerCount`<sup>Required</sup> <a name="MaxWorkerCount" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCount"></a>

```csharp
public double MaxWorkerCount { get; }
```

- *Type:* double

---

##### `McuCount`<sup>Required</sup> <a name="McuCount" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCount"></a>

```csharp
public double McuCount { get; }
```

- *Type:* double

---

##### `MinWorkerCount`<sup>Required</sup> <a name="MinWorkerCount" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCount"></a>

```csharp
public double MinWorkerCount { get; }
```

- *Type:* double

---

##### `ScaleInPolicy`<sup>Required</sup> <a name="ScaleInPolicy" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicy"></a>

```csharp
public DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference ScaleInPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference</a>

---

##### `ScaleOutPolicy`<sup>Required</sup> <a name="ScaleOutPolicy" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicy"></a>

```csharp
public DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference ScaleOutPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectConnectorCapacityAutoScaling InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScaling">DataAwsccKafkaconnectConnectorCapacityAutoScaling</a>

---


### DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference <a name="DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage">CpuUtilizationPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuUtilizationPercentage`<sup>Required</sup> <a name="CpuUtilizationPercentage" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```csharp
public double CpuUtilizationPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a>

---


### DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference <a name="DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage">CpuUtilizationPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuUtilizationPercentage`<sup>Required</sup> <a name="CpuUtilizationPercentage" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```csharp
public double CpuUtilizationPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">DataAwsccKafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a>

---


### DataAwsccKafkaconnectConnectorCapacityOutputReference <a name="DataAwsccKafkaconnectConnectorCapacityOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorCapacityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.autoScaling">AutoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference">DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.provisionedCapacity">ProvisionedCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference">DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacity">DataAwsccKafkaconnectConnectorCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoScaling`<sup>Required</sup> <a name="AutoScaling" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.autoScaling"></a>

```csharp
public DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference AutoScaling { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference">DataAwsccKafkaconnectConnectorCapacityAutoScalingOutputReference</a>

---

##### `ProvisionedCapacity`<sup>Required</sup> <a name="ProvisionedCapacity" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.provisionedCapacity"></a>

```csharp
public DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference ProvisionedCapacity { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference">DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectConnectorCapacity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacity">DataAwsccKafkaconnectConnectorCapacity</a>

---


### DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference <a name="DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount">McuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount">WorkerCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity">DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `McuCount`<sup>Required</sup> <a name="McuCount" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount"></a>

```csharp
public double McuCount { get; }
```

- *Type:* double

---

##### `WorkerCount`<sup>Required</sup> <a name="WorkerCount" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount"></a>

```csharp
public double WorkerCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity">DataAwsccKafkaconnectConnectorCapacityProvisionedCapacity</a>

---


### DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference <a name="DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers">BootstrapServers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BootstrapServers`<sup>Required</sup> <a name="BootstrapServers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers"></a>

```csharp
public string BootstrapServers { get; }
```

- *Type:* string

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc"></a>

```csharp
public DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference Vpc { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaCluster</a>

---


### DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference <a name="DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---


### DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference <a name="DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication">DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication">DataAwsccKafkaconnectConnectorKafkaClusterClientAuthentication</a>

---


### DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference <a name="DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit">DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit">DataAwsccKafkaconnectConnectorKafkaClusterEncryptionInTransit</a>

---


### DataAwsccKafkaconnectConnectorKafkaClusterOutputReference <a name="DataAwsccKafkaconnectConnectorKafkaClusterOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorKafkaClusterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster">ApacheKafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaCluster">DataAwsccKafkaconnectConnectorKafkaCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApacheKafkaCluster`<sup>Required</sup> <a name="ApacheKafkaCluster" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster"></a>

```csharp
public DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference ApacheKafkaCluster { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">DataAwsccKafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaClusterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectConnectorKafkaCluster InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorKafkaCluster">DataAwsccKafkaconnectConnectorKafkaCluster</a>

---


### DataAwsccKafkaconnectConnectorLogDeliveryOutputReference <a name="DataAwsccKafkaconnectConnectorLogDeliveryOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorLogDeliveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery">WorkerLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDelivery">DataAwsccKafkaconnectConnectorLogDelivery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkerLogDelivery`<sup>Required</sup> <a name="WorkerLogDelivery" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery"></a>

```csharp
public DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference WorkerLogDelivery { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectConnectorLogDelivery InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDelivery">DataAwsccKafkaconnectConnectorLogDelivery</a>

---


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup">LogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup"></a>

```csharp
public string LogGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream">DeliveryStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeliveryStream`<sup>Required</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream"></a>

```csharp
public string DeliveryStream { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs"></a>

```csharp
public DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference CloudwatchLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a>

---

##### `Firehose`<sup>Required</sup> <a name="Firehose" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose"></a>

```csharp
public DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference Firehose { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3"></a>

```csharp
public DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDelivery</a>

---


### DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference <a name="DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">DataAwsccKafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---


### DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference <a name="DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArn">CustomPluginArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.revision">Revision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPlugin">DataAwsccKafkaconnectConnectorPluginsCustomPlugin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomPluginArn`<sup>Required</sup> <a name="CustomPluginArn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArn"></a>

```csharp
public string CustomPluginArn { get; }
```

- *Type:* string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.revision"></a>

```csharp
public double Revision { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectConnectorPluginsCustomPlugin InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPlugin">DataAwsccKafkaconnectConnectorPluginsCustomPlugin</a>

---


### DataAwsccKafkaconnectConnectorPluginsList <a name="DataAwsccKafkaconnectConnectorPluginsList" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorPluginsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.get"></a>

```csharp
private DataAwsccKafkaconnectConnectorPluginsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccKafkaconnectConnectorPluginsOutputReference <a name="DataAwsccKafkaconnectConnectorPluginsOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorPluginsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.customPlugin">CustomPlugin</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference">DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPlugins">DataAwsccKafkaconnectConnectorPlugins</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomPlugin`<sup>Required</sup> <a name="CustomPlugin" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.customPlugin"></a>

```csharp
public DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference CustomPlugin { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference">DataAwsccKafkaconnectConnectorPluginsCustomPluginOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPluginsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectConnectorPlugins InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorPlugins">DataAwsccKafkaconnectConnectorPlugins</a>

---


### DataAwsccKafkaconnectConnectorTagsList <a name="DataAwsccKafkaconnectConnectorTagsList" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.get"></a>

```csharp
private DataAwsccKafkaconnectConnectorTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccKafkaconnectConnectorTagsOutputReference <a name="DataAwsccKafkaconnectConnectorTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTags">DataAwsccKafkaconnectConnectorTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectConnectorTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorTags">DataAwsccKafkaconnectConnectorTags</a>

---


### DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference <a name="DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.revision">Revision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArn">WorkerConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfiguration">DataAwsccKafkaconnectConnectorWorkerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.revision"></a>

```csharp
public double Revision { get; }
```

- *Type:* double

---

##### `WorkerConfigurationArn`<sup>Required</sup> <a name="WorkerConfigurationArn" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArn"></a>

```csharp
public string WorkerConfigurationArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccKafkaconnectConnectorWorkerConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccKafkaconnectConnector.DataAwsccKafkaconnectConnectorWorkerConfiguration">DataAwsccKafkaconnectConnectorWorkerConfiguration</a>

---



