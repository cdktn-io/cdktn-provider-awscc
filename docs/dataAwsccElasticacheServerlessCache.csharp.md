# `dataAwsccElasticacheServerlessCache` Submodule <a name="`dataAwsccElasticacheServerlessCache` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticacheServerlessCache <a name="DataAwsccElasticacheServerlessCache" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/elasticache_serverless_cache awscc_elasticache_serverless_cache}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheServerlessCache(Construct Scope, string Id, DataAwsccElasticacheServerlessCacheConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheConfig">DataAwsccElasticacheServerlessCacheConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheConfig">DataAwsccElasticacheServerlessCacheConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElasticacheServerlessCache resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticacheServerlessCache.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticacheServerlessCache.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticacheServerlessCache.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccElasticacheServerlessCache.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccElasticacheServerlessCache resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccElasticacheServerlessCache to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccElasticacheServerlessCache that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/elasticache_serverless_cache#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticacheServerlessCache to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.cacheUsageLimits">CacheUsageLimits</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference">DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.dailySnapshotTime">DailySnapshotTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference">DataAwsccElasticacheServerlessCacheEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.finalSnapshotName">FinalSnapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.fullEngineVersion">FullEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.majorEngineVersion">MajorEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.readerEndpoint">ReaderEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference">DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.serverlessCacheName">ServerlessCacheName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.snapshotArnsToRestore">SnapshotArnsToRestore</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList">DataAwsccElasticacheServerlessCacheTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.userGroupId">UserGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CacheUsageLimits`<sup>Required</sup> <a name="CacheUsageLimits" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.cacheUsageLimits"></a>

```csharp
public DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference CacheUsageLimits { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference">DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DailySnapshotTime`<sup>Required</sup> <a name="DailySnapshotTime" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.dailySnapshotTime"></a>

```csharp
public string DailySnapshotTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.endpoint"></a>

```csharp
public DataAwsccElasticacheServerlessCacheEndpointOutputReference Endpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference">DataAwsccElasticacheServerlessCacheEndpointOutputReference</a>

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `FinalSnapshotName`<sup>Required</sup> <a name="FinalSnapshotName" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.finalSnapshotName"></a>

```csharp
public string FinalSnapshotName { get; }
```

- *Type:* string

---

##### `FullEngineVersion`<sup>Required</sup> <a name="FullEngineVersion" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.fullEngineVersion"></a>

```csharp
public string FullEngineVersion { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `MajorEngineVersion`<sup>Required</sup> <a name="MajorEngineVersion" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.majorEngineVersion"></a>

```csharp
public string MajorEngineVersion { get; }
```

- *Type:* string

---

##### `ReaderEndpoint`<sup>Required</sup> <a name="ReaderEndpoint" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.readerEndpoint"></a>

```csharp
public DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference ReaderEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference">DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference</a>

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `ServerlessCacheName`<sup>Required</sup> <a name="ServerlessCacheName" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.serverlessCacheName"></a>

```csharp
public string ServerlessCacheName { get; }
```

- *Type:* string

---

##### `SnapshotArnsToRestore`<sup>Required</sup> <a name="SnapshotArnsToRestore" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.snapshotArnsToRestore"></a>

```csharp
public string[] SnapshotArnsToRestore { get; }
```

- *Type:* string[]

---

##### `SnapshotRetentionLimit`<sup>Required</sup> <a name="SnapshotRetentionLimit" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.snapshotRetentionLimit"></a>

```csharp
public double SnapshotRetentionLimit { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.tags"></a>

```csharp
public DataAwsccElasticacheServerlessCacheTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList">DataAwsccElasticacheServerlessCacheTagsList</a>

---

##### `UserGroupId`<sup>Required</sup> <a name="UserGroupId" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.userGroupId"></a>

```csharp
public string UserGroupId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCache.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticacheServerlessCacheCacheUsageLimits <a name="DataAwsccElasticacheServerlessCacheCacheUsageLimits" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimits.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheServerlessCacheCacheUsageLimits {

};
```


### DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorage <a name="DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorage" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorage {

};
```


### DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond <a name="DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond {

};
```


### DataAwsccElasticacheServerlessCacheConfig <a name="DataAwsccElasticacheServerlessCacheConfig" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheServerlessCacheConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/elasticache_serverless_cache#id DataAwsccElasticacheServerlessCache#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticacheServerlessCacheEndpoint <a name="DataAwsccElasticacheServerlessCacheEndpoint" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheServerlessCacheEndpoint {

};
```


### DataAwsccElasticacheServerlessCacheReaderEndpoint <a name="DataAwsccElasticacheServerlessCacheReaderEndpoint" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheServerlessCacheReaderEndpoint {

};
```


### DataAwsccElasticacheServerlessCacheTags <a name="DataAwsccElasticacheServerlessCacheTags" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheServerlessCacheTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference <a name="DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.maximum">Maximum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.minimum">Minimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorage">DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.maximum"></a>

```csharp
public double Maximum { get; }
```

- *Type:* double

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.minimum"></a>

```csharp
public double Minimum { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorage">DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>

---


### DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference <a name="DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.maximum">Maximum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.minimum">Minimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.maximum"></a>

```csharp
public double Maximum { get; }
```

- *Type:* double

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.minimum"></a>

```csharp
public double Minimum { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>

---


### DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference <a name="DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.dataStorage">DataStorage</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference">DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.ecpuPerSecond">EcpuPerSecond</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference">DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimits">DataAwsccElasticacheServerlessCacheCacheUsageLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataStorage`<sup>Required</sup> <a name="DataStorage" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.dataStorage"></a>

```csharp
public DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference DataStorage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference">DataAwsccElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference</a>

---

##### `EcpuPerSecond`<sup>Required</sup> <a name="EcpuPerSecond" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.ecpuPerSecond"></a>

```csharp
public DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference EcpuPerSecond { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference">DataAwsccElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticacheServerlessCacheCacheUsageLimits InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheCacheUsageLimits">DataAwsccElasticacheServerlessCacheCacheUsageLimits</a>

---


### DataAwsccElasticacheServerlessCacheEndpointOutputReference <a name="DataAwsccElasticacheServerlessCacheEndpointOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheServerlessCacheEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpoint">DataAwsccElasticacheServerlessCacheEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpointOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticacheServerlessCacheEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheEndpoint">DataAwsccElasticacheServerlessCacheEndpoint</a>

---


### DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference <a name="DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpoint">DataAwsccElasticacheServerlessCacheReaderEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpointOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticacheServerlessCacheReaderEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheReaderEndpoint">DataAwsccElasticacheServerlessCacheReaderEndpoint</a>

---


### DataAwsccElasticacheServerlessCacheTagsList <a name="DataAwsccElasticacheServerlessCacheTagsList" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheServerlessCacheTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.get"></a>

```csharp
private DataAwsccElasticacheServerlessCacheTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccElasticacheServerlessCacheTagsOutputReference <a name="DataAwsccElasticacheServerlessCacheTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccElasticacheServerlessCacheTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTags">DataAwsccElasticacheServerlessCacheTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccElasticacheServerlessCacheTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticacheServerlessCache.DataAwsccElasticacheServerlessCacheTags">DataAwsccElasticacheServerlessCacheTags</a>

---



