# `dataAwsccElasticacheGlobalReplicationGroup` Submodule <a name="`dataAwsccElasticacheGlobalReplicationGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticacheGlobalReplicationGroup <a name="DataAwsccElasticacheGlobalReplicationGroup" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/elasticache_global_replication_group awscc_elasticache_global_replication_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheGlobalReplicationGroup(Construct Scope, string Id, DataAwsccElasticacheGlobalReplicationGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig">DataAwsccElasticacheGlobalReplicationGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig">DataAwsccElasticacheGlobalReplicationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElasticacheGlobalReplicationGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticacheGlobalReplicationGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticacheGlobalReplicationGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticacheGlobalReplicationGroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticacheGlobalReplicationGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccElasticacheGlobalReplicationGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccElasticacheGlobalReplicationGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccElasticacheGlobalReplicationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/elasticache_global_replication_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticacheGlobalReplicationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.automaticFailoverEnabled">AutomaticFailoverEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.cacheNodeType">CacheNodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.cacheParameterGroupName">CacheParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.globalNodeGroupCount">GlobalNodeGroupCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescription">GlobalReplicationGroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.globalReplicationGroupId">GlobalReplicationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffix">GlobalReplicationGroupIdSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.members">Members</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList">DataAwsccElasticacheGlobalReplicationGroupMembersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.regionalConfigurations">RegionalConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList">DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AutomaticFailoverEnabled`<sup>Required</sup> <a name="AutomaticFailoverEnabled" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.automaticFailoverEnabled"></a>

```csharp
public IResolvable AutomaticFailoverEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CacheNodeType`<sup>Required</sup> <a name="CacheNodeType" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.cacheNodeType"></a>

```csharp
public string CacheNodeType { get; }
```

- *Type:* string

---

##### `CacheParameterGroupName`<sup>Required</sup> <a name="CacheParameterGroupName" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.cacheParameterGroupName"></a>

```csharp
public string CacheParameterGroupName { get; }
```

- *Type:* string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `GlobalNodeGroupCount`<sup>Required</sup> <a name="GlobalNodeGroupCount" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.globalNodeGroupCount"></a>

```csharp
public double GlobalNodeGroupCount { get; }
```

- *Type:* double

---

##### `GlobalReplicationGroupDescription`<sup>Required</sup> <a name="GlobalReplicationGroupDescription" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescription"></a>

```csharp
public string GlobalReplicationGroupDescription { get; }
```

- *Type:* string

---

##### `GlobalReplicationGroupId`<sup>Required</sup> <a name="GlobalReplicationGroupId" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.globalReplicationGroupId"></a>

```csharp
public string GlobalReplicationGroupId { get; }
```

- *Type:* string

---

##### `GlobalReplicationGroupIdSuffix`<sup>Required</sup> <a name="GlobalReplicationGroupIdSuffix" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffix"></a>

```csharp
public string GlobalReplicationGroupIdSuffix { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.members"></a>

```csharp
public DataAwsccElasticacheGlobalReplicationGroupMembersList Members { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList">DataAwsccElasticacheGlobalReplicationGroupMembersList</a>

---

##### `RegionalConfigurations`<sup>Required</sup> <a name="RegionalConfigurations" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.regionalConfigurations"></a>

```csharp
public DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList RegionalConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList">DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticacheGlobalReplicationGroupConfig <a name="DataAwsccElasticacheGlobalReplicationGroupConfig" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheGlobalReplicationGroupConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/elasticache_global_replication_group#id DataAwsccElasticacheGlobalReplicationGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticacheGlobalReplicationGroupMembers <a name="DataAwsccElasticacheGlobalReplicationGroupMembers" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheGlobalReplicationGroupMembers {

};
```


### DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations <a name="DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations {

};
```


### DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations <a name="DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticacheGlobalReplicationGroupMembersList <a name="DataAwsccElasticacheGlobalReplicationGroupMembersList" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheGlobalReplicationGroupMembersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.get"></a>

```csharp
private DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference <a name="DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupId">ReplicationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupRegion">ReplicationGroupRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembers">DataAwsccElasticacheGlobalReplicationGroupMembers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReplicationGroupId`<sup>Required</sup> <a name="ReplicationGroupId" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupId"></a>

```csharp
public string ReplicationGroupId { get; }
```

- *Type:* string

---

##### `ReplicationGroupRegion`<sup>Required</sup> <a name="ReplicationGroupRegion" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupRegion"></a>

```csharp
public string ReplicationGroupRegion { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticacheGlobalReplicationGroupMembers InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupMembers">DataAwsccElasticacheGlobalReplicationGroupMembers</a>

---


### DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList <a name="DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.get"></a>

```csharp
private DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference <a name="DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupId">ReplicationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupRegion">ReplicationGroupRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.reshardingConfigurations">ReshardingConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList">DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations">DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReplicationGroupId`<sup>Required</sup> <a name="ReplicationGroupId" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupId"></a>

```csharp
public string ReplicationGroupId { get; }
```

- *Type:* string

---

##### `ReplicationGroupRegion`<sup>Required</sup> <a name="ReplicationGroupRegion" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupRegion"></a>

```csharp
public string ReplicationGroupRegion { get; }
```

- *Type:* string

---

##### `ReshardingConfigurations`<sup>Required</sup> <a name="ReshardingConfigurations" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.reshardingConfigurations"></a>

```csharp
public DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList ReshardingConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList">DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations">DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurations</a>

---


### DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList <a name="DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.get"></a>

```csharp
private DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference <a name="DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.nodeGroupId">NodeGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.preferredAvailabilityZones">PreferredAvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations">DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeGroupId`<sup>Required</sup> <a name="NodeGroupId" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.nodeGroupId"></a>

```csharp
public string NodeGroupId { get; }
```

- *Type:* string

---

##### `PreferredAvailabilityZones`<sup>Required</sup> <a name="PreferredAvailabilityZones" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.preferredAvailabilityZones"></a>

```csharp
public string[] PreferredAvailabilityZones { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheGlobalReplicationGroup.DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations">DataAwsccElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations</a>

---



