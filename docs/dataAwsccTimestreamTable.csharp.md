# `dataAwsccTimestreamTable` Submodule <a name="`dataAwsccTimestreamTable` Submodule" id="@cdktn/provider-awscc.dataAwsccTimestreamTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccTimestreamTable <a name="DataAwsccTimestreamTable" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/timestream_table awscc_timestream_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamTable(Construct Scope, string Id, DataAwsccTimestreamTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig">DataAwsccTimestreamTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig">DataAwsccTimestreamTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccTimestreamTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccTimestreamTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccTimestreamTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccTimestreamTable.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccTimestreamTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccTimestreamTable resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccTimestreamTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccTimestreamTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/timestream_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccTimestreamTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.magneticStoreWriteProperties">MagneticStoreWriteProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference">DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.retentionProperties">RetentionProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference">DataAwsccTimestreamTableRetentionPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference">DataAwsccTimestreamTableSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList">DataAwsccTimestreamTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `MagneticStoreWriteProperties`<sup>Required</sup> <a name="MagneticStoreWriteProperties" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.magneticStoreWriteProperties"></a>

```csharp
public DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference MagneticStoreWriteProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference">DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RetentionProperties`<sup>Required</sup> <a name="RetentionProperties" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.retentionProperties"></a>

```csharp
public DataAwsccTimestreamTableRetentionPropertiesOutputReference RetentionProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference">DataAwsccTimestreamTableRetentionPropertiesOutputReference</a>

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.schema"></a>

```csharp
public DataAwsccTimestreamTableSchemaOutputReference Schema { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference">DataAwsccTimestreamTableSchemaOutputReference</a>

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.tags"></a>

```csharp
public DataAwsccTimestreamTableTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList">DataAwsccTimestreamTableTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccTimestreamTableConfig <a name="DataAwsccTimestreamTableConfig" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamTableConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/timestream_table#id DataAwsccTimestreamTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccTimestreamTableMagneticStoreWriteProperties <a name="DataAwsccTimestreamTableMagneticStoreWriteProperties" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWriteProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWriteProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamTableMagneticStoreWriteProperties {

};
```


### DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation <a name="DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation {

};
```


### DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration <a name="DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration {

};
```


### DataAwsccTimestreamTableRetentionProperties <a name="DataAwsccTimestreamTableRetentionProperties" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamTableRetentionProperties {

};
```


### DataAwsccTimestreamTableSchema <a name="DataAwsccTimestreamTableSchema" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamTableSchema {

};
```


### DataAwsccTimestreamTableSchemaCompositePartitionKey <a name="DataAwsccTimestreamTableSchemaCompositePartitionKey" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKey.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamTableSchemaCompositePartitionKey {

};
```


### DataAwsccTimestreamTableTags <a name="DataAwsccTimestreamTableTags" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamTableTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference <a name="DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference">DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Configuration`<sup>Required</sup> <a name="S3Configuration" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.s3Configuration"></a>

```csharp
public DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference S3Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference">DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation">DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation</a>

---


### DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference <a name="DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.encryptionOption">EncryptionOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.objectKeyPrefix">ObjectKeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `EncryptionOption`<sup>Required</sup> <a name="EncryptionOption" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.encryptionOption"></a>

```csharp
public string EncryptionOption { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `ObjectKeyPrefix`<sup>Required</sup> <a name="ObjectKeyPrefix" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.objectKeyPrefix"></a>

```csharp
public string ObjectKeyPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3ConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration">DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationS3Configuration</a>

---


### DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference <a name="DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.property.enableMagneticStoreWrites">EnableMagneticStoreWrites</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.property.magneticStoreRejectedDataLocation">MagneticStoreRejectedDataLocation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference">DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWriteProperties">DataAwsccTimestreamTableMagneticStoreWriteProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableMagneticStoreWrites`<sup>Required</sup> <a name="EnableMagneticStoreWrites" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.property.enableMagneticStoreWrites"></a>

```csharp
public IResolvable EnableMagneticStoreWrites { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MagneticStoreRejectedDataLocation`<sup>Required</sup> <a name="MagneticStoreRejectedDataLocation" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.property.magneticStoreRejectedDataLocation"></a>

```csharp
public DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference MagneticStoreRejectedDataLocation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference">DataAwsccTimestreamTableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWritePropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTimestreamTableMagneticStoreWriteProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableMagneticStoreWriteProperties">DataAwsccTimestreamTableMagneticStoreWriteProperties</a>

---


### DataAwsccTimestreamTableRetentionPropertiesOutputReference <a name="DataAwsccTimestreamTableRetentionPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamTableRetentionPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.property.magneticStoreRetentionPeriodInDays">MagneticStoreRetentionPeriodInDays</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.property.memoryStoreRetentionPeriodInHours">MemoryStoreRetentionPeriodInHours</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionProperties">DataAwsccTimestreamTableRetentionProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MagneticStoreRetentionPeriodInDays`<sup>Required</sup> <a name="MagneticStoreRetentionPeriodInDays" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.property.magneticStoreRetentionPeriodInDays"></a>

```csharp
public string MagneticStoreRetentionPeriodInDays { get; }
```

- *Type:* string

---

##### `MemoryStoreRetentionPeriodInHours`<sup>Required</sup> <a name="MemoryStoreRetentionPeriodInHours" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.property.memoryStoreRetentionPeriodInHours"></a>

```csharp
public string MemoryStoreRetentionPeriodInHours { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTimestreamTableRetentionProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableRetentionProperties">DataAwsccTimestreamTableRetentionProperties</a>

---


### DataAwsccTimestreamTableSchemaCompositePartitionKeyList <a name="DataAwsccTimestreamTableSchemaCompositePartitionKeyList" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamTableSchemaCompositePartitionKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.get"></a>

```csharp
private DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference <a name="DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.enforcementInRecord">EnforcementInRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKey">DataAwsccTimestreamTableSchemaCompositePartitionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnforcementInRecord`<sup>Required</sup> <a name="EnforcementInRecord" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.enforcementInRecord"></a>

```csharp
public string EnforcementInRecord { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTimestreamTableSchemaCompositePartitionKey InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKey">DataAwsccTimestreamTableSchemaCompositePartitionKey</a>

---


### DataAwsccTimestreamTableSchemaOutputReference <a name="DataAwsccTimestreamTableSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamTableSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.property.compositePartitionKey">CompositePartitionKey</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList">DataAwsccTimestreamTableSchemaCompositePartitionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchema">DataAwsccTimestreamTableSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompositePartitionKey`<sup>Required</sup> <a name="CompositePartitionKey" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.property.compositePartitionKey"></a>

```csharp
public DataAwsccTimestreamTableSchemaCompositePartitionKeyList CompositePartitionKey { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaCompositePartitionKeyList">DataAwsccTimestreamTableSchemaCompositePartitionKeyList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchemaOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTimestreamTableSchema InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableSchema">DataAwsccTimestreamTableSchema</a>

---


### DataAwsccTimestreamTableTagsList <a name="DataAwsccTimestreamTableTagsList" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamTableTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.get"></a>

```csharp
private DataAwsccTimestreamTableTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccTimestreamTableTagsOutputReference <a name="DataAwsccTimestreamTableTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamTableTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTags">DataAwsccTimestreamTableTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTimestreamTableTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamTable.DataAwsccTimestreamTableTags">DataAwsccTimestreamTableTags</a>

---



