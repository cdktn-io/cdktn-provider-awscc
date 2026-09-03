# `dataAwsccElasticacheServerlessCacheSnapshot` Submodule <a name="`dataAwsccElasticacheServerlessCacheSnapshot` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticacheServerlessCacheSnapshot <a name="DataAwsccElasticacheServerlessCacheSnapshot" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/elasticache_serverless_cache_snapshot awscc_elasticache_serverless_cache_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheServerlessCacheSnapshot(Construct Scope, string Id, DataAwsccElasticacheServerlessCacheSnapshotConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig">DataAwsccElasticacheServerlessCacheSnapshotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig">DataAwsccElasticacheServerlessCacheSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElasticacheServerlessCacheSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticacheServerlessCacheSnapshot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticacheServerlessCacheSnapshot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticacheServerlessCacheSnapshot.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticacheServerlessCacheSnapshot.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccElasticacheServerlessCacheSnapshot resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccElasticacheServerlessCacheSnapshot to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccElasticacheServerlessCacheSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/elasticache_serverless_cache_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticacheServerlessCacheSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.bytesUsedForCache">BytesUsedForCache</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.serverlessCacheConfiguration">ServerlessCacheConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference">DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.serverlessCacheName">ServerlessCacheName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.serverlessCacheSnapshotName">ServerlessCacheSnapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.snapshotType">SnapshotType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList">DataAwsccElasticacheServerlessCacheSnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BytesUsedForCache`<sup>Required</sup> <a name="BytesUsedForCache" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.bytesUsedForCache"></a>

```csharp
public string BytesUsedForCache { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `ServerlessCacheConfiguration`<sup>Required</sup> <a name="ServerlessCacheConfiguration" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.serverlessCacheConfiguration"></a>

```csharp
public DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference ServerlessCacheConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference">DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference</a>

---

##### `ServerlessCacheName`<sup>Required</sup> <a name="ServerlessCacheName" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.serverlessCacheName"></a>

```csharp
public string ServerlessCacheName { get; }
```

- *Type:* string

---

##### `ServerlessCacheSnapshotName`<sup>Required</sup> <a name="ServerlessCacheSnapshotName" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.serverlessCacheSnapshotName"></a>

```csharp
public string ServerlessCacheSnapshotName { get; }
```

- *Type:* string

---

##### `SnapshotType`<sup>Required</sup> <a name="SnapshotType" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.snapshotType"></a>

```csharp
public string SnapshotType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.tags"></a>

```csharp
public DataAwsccElasticacheServerlessCacheSnapshotTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList">DataAwsccElasticacheServerlessCacheSnapshotTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticacheServerlessCacheSnapshotConfig <a name="DataAwsccElasticacheServerlessCacheSnapshotConfig" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheServerlessCacheSnapshotConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/elasticache_serverless_cache_snapshot#id DataAwsccElasticacheServerlessCacheSnapshot#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfiguration <a name="DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfiguration" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfiguration {

};
```


### DataAwsccElasticacheServerlessCacheSnapshotTags <a name="DataAwsccElasticacheServerlessCacheSnapshotTags" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheServerlessCacheSnapshotTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference <a name="DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.majorEngineVersion">MajorEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.serverlessCacheName">ServerlessCacheName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfiguration">DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `MajorEngineVersion`<sup>Required</sup> <a name="MajorEngineVersion" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.majorEngineVersion"></a>

```csharp
public string MajorEngineVersion { get; }
```

- *Type:* string

---

##### `ServerlessCacheName`<sup>Required</sup> <a name="ServerlessCacheName" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.serverlessCacheName"></a>

```csharp
public string ServerlessCacheName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfiguration">DataAwsccElasticacheServerlessCacheSnapshotServerlessCacheConfiguration</a>

---


### DataAwsccElasticacheServerlessCacheSnapshotTagsList <a name="DataAwsccElasticacheServerlessCacheSnapshotTagsList" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheServerlessCacheSnapshotTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.get"></a>

```csharp
private DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference <a name="DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTags">DataAwsccElasticacheServerlessCacheSnapshotTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticacheServerlessCacheSnapshotTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCacheSnapshot.DataAwsccElasticacheServerlessCacheSnapshotTags">DataAwsccElasticacheServerlessCacheSnapshotTags</a>

---



