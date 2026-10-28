# `dataAwsccTimestreamInfluxDbBackup` Submodule <a name="`dataAwsccTimestreamInfluxDbBackup` Submodule" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccTimestreamInfluxDbBackup <a name="DataAwsccTimestreamInfluxDbBackup" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/timestream_influx_db_backup awscc_timestream_influx_db_backup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamInfluxDbBackup(Construct Scope, string Id, DataAwsccTimestreamInfluxDbBackupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig">DataAwsccTimestreamInfluxDbBackupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig">DataAwsccTimestreamInfluxDbBackupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccTimestreamInfluxDbBackup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccTimestreamInfluxDbBackup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccTimestreamInfluxDbBackup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccTimestreamInfluxDbBackup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccTimestreamInfluxDbBackup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccTimestreamInfluxDbBackup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccTimestreamInfluxDbBackup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccTimestreamInfluxDbBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/timestream_influx_db_backup#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccTimestreamInfluxDbBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.allocatedStorage">AllocatedStorage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.clusterConfiguration">ClusterConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference">DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbInstanceType">DbInstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbParameterGroupId">DbParameterGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbResourceId">DbResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbStorageType">DbStorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.deploymentType">DeploymentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.engineType">EngineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.expiresAfter">ExpiresAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.failoverMode">FailoverMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.influxAuthParametersSecretArn">InfluxAuthParametersSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.influxDbBackupId">InfluxDbBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.logDeliveryConfiguration">LogDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.maintenanceSchedule">MaintenanceSchedule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference">DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.retentionDays">RetentionDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList">DataAwsccTimestreamInfluxDbBackupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.vpcSubnetIds">VpcSubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AllocatedStorage`<sup>Required</sup> <a name="AllocatedStorage" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.allocatedStorage"></a>

```csharp
public double AllocatedStorage { get; }
```

- *Type:* double

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ClusterConfiguration`<sup>Required</sup> <a name="ClusterConfiguration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.clusterConfiguration"></a>

```csharp
public DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference ClusterConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference">DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DbInstanceType`<sup>Required</sup> <a name="DbInstanceType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbInstanceType"></a>

```csharp
public string DbInstanceType { get; }
```

- *Type:* string

---

##### `DbParameterGroupId`<sup>Required</sup> <a name="DbParameterGroupId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbParameterGroupId"></a>

```csharp
public string DbParameterGroupId { get; }
```

- *Type:* string

---

##### `DbResourceId`<sup>Required</sup> <a name="DbResourceId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbResourceId"></a>

```csharp
public string DbResourceId { get; }
```

- *Type:* string

---

##### `DbStorageType`<sup>Required</sup> <a name="DbStorageType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.dbStorageType"></a>

```csharp
public string DbStorageType { get; }
```

- *Type:* string

---

##### `DeploymentType`<sup>Required</sup> <a name="DeploymentType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.deploymentType"></a>

```csharp
public string DeploymentType { get; }
```

- *Type:* string

---

##### `EngineType`<sup>Required</sup> <a name="EngineType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.engineType"></a>

```csharp
public string EngineType { get; }
```

- *Type:* string

---

##### `ExpiresAfter`<sup>Required</sup> <a name="ExpiresAfter" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.expiresAfter"></a>

```csharp
public string ExpiresAfter { get; }
```

- *Type:* string

---

##### `FailoverMode`<sup>Required</sup> <a name="FailoverMode" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.failoverMode"></a>

```csharp
public string FailoverMode { get; }
```

- *Type:* string

---

##### `InfluxAuthParametersSecretArn`<sup>Required</sup> <a name="InfluxAuthParametersSecretArn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.influxAuthParametersSecretArn"></a>

```csharp
public string InfluxAuthParametersSecretArn { get; }
```

- *Type:* string

---

##### `InfluxDbBackupId`<sup>Required</sup> <a name="InfluxDbBackupId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.influxDbBackupId"></a>

```csharp
public string InfluxDbBackupId { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `LogDeliveryConfiguration`<sup>Required</sup> <a name="LogDeliveryConfiguration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.logDeliveryConfiguration"></a>

```csharp
public DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference LogDeliveryConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference</a>

---

##### `MaintenanceSchedule`<sup>Required</sup> <a name="MaintenanceSchedule" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.maintenanceSchedule"></a>

```csharp
public DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference MaintenanceSchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference">DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.publiclyAccessible"></a>

```csharp
public IResolvable PubliclyAccessible { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.retentionDays"></a>

```csharp
public double RetentionDays { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.tags"></a>

```csharp
public DataAwsccTimestreamInfluxDbBackupTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList">DataAwsccTimestreamInfluxDbBackupTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `VpcSubnetIds`<sup>Required</sup> <a name="VpcSubnetIds" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.vpcSubnetIds"></a>

```csharp
public string[] VpcSubnetIds { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccTimestreamInfluxDbBackupClusterConfiguration <a name="DataAwsccTimestreamInfluxDbBackupClusterConfiguration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamInfluxDbBackupClusterConfiguration {

};
```


### DataAwsccTimestreamInfluxDbBackupConfig <a name="DataAwsccTimestreamInfluxDbBackupConfig" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamInfluxDbBackupConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/data-sources/timestream_influx_db_backup#id DataAwsccTimestreamInfluxDbBackup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration <a name="DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration {

};
```


### DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration <a name="DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration {

};
```


### DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule <a name="DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule {

};
```


### DataAwsccTimestreamInfluxDbBackupTags <a name="DataAwsccTimestreamInfluxDbBackupTags" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamInfluxDbBackupTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference <a name="DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.dedicatedCompactor">DedicatedCompactor</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.ingestQueryInstances">IngestQueryInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.queryOnlyInstances">QueryOnlyInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfiguration">DataAwsccTimestreamInfluxDbBackupClusterConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DedicatedCompactor`<sup>Required</sup> <a name="DedicatedCompactor" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.dedicatedCompactor"></a>

```csharp
public IResolvable DedicatedCompactor { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `IngestQueryInstances`<sup>Required</sup> <a name="IngestQueryInstances" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.ingestQueryInstances"></a>

```csharp
public double IngestQueryInstances { get; }
```

- *Type:* double

---

##### `QueryOnlyInstances`<sup>Required</sup> <a name="QueryOnlyInstances" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.queryOnlyInstances"></a>

```csharp
public double QueryOnlyInstances { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTimestreamInfluxDbBackupClusterConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupClusterConfiguration">DataAwsccTimestreamInfluxDbBackupClusterConfiguration</a>

---


### DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference <a name="DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.s3Configuration">S3Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Configuration`<sup>Required</sup> <a name="S3Configuration" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.s3Configuration"></a>

```csharp
public DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference S3Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfiguration</a>

---


### DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference <a name="DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3ConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration">DataAwsccTimestreamInfluxDbBackupLogDeliveryConfigurationS3Configuration</a>

---


### DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference <a name="DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule">DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceScheduleOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule">DataAwsccTimestreamInfluxDbBackupMaintenanceSchedule</a>

---


### DataAwsccTimestreamInfluxDbBackupTagsList <a name="DataAwsccTimestreamInfluxDbBackupTagsList" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamInfluxDbBackupTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.get"></a>

```csharp
private DataAwsccTimestreamInfluxDbBackupTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccTimestreamInfluxDbBackupTagsOutputReference <a name="DataAwsccTimestreamInfluxDbBackupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccTimestreamInfluxDbBackupTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTags">DataAwsccTimestreamInfluxDbBackupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccTimestreamInfluxDbBackupTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccTimestreamInfluxDbBackup.DataAwsccTimestreamInfluxDbBackupTags">DataAwsccTimestreamInfluxDbBackupTags</a>

---



