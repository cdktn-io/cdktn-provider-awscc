# `dataAwsccCloudfrontRealtimeLogConfig` Submodule <a name="`dataAwsccCloudfrontRealtimeLogConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudfrontRealtimeLogConfig <a name="DataAwsccCloudfrontRealtimeLogConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cloudfront_realtime_log_config awscc_cloudfront_realtime_log_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontRealtimeLogConfig(Construct Scope, string Id, DataAwsccCloudfrontRealtimeLogConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig">DataAwsccCloudfrontRealtimeLogConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig">DataAwsccCloudfrontRealtimeLogConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudfrontRealtimeLogConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCloudfrontRealtimeLogConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCloudfrontRealtimeLogConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCloudfrontRealtimeLogConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCloudfrontRealtimeLogConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCloudfrontRealtimeLogConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCloudfrontRealtimeLogConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCloudfrontRealtimeLogConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cloudfront_realtime_log_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudfrontRealtimeLogConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.endPoints">EndPoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList">DataAwsccCloudfrontRealtimeLogConfigEndPointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.fields">Fields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.samplingRate">SamplingRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `EndPoints`<sup>Required</sup> <a name="EndPoints" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.endPoints"></a>

```csharp
public DataAwsccCloudfrontRealtimeLogConfigEndPointsList EndPoints { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList">DataAwsccCloudfrontRealtimeLogConfigEndPointsList</a>

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.fields"></a>

```csharp
public string[] Fields { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SamplingRate`<sup>Required</sup> <a name="SamplingRate" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.samplingRate"></a>

```csharp
public double SamplingRate { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudfrontRealtimeLogConfigConfig <a name="DataAwsccCloudfrontRealtimeLogConfigConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontRealtimeLogConfigConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/cloudfront_realtime_log_config#id DataAwsccCloudfrontRealtimeLogConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudfrontRealtimeLogConfigEndPoints <a name="DataAwsccCloudfrontRealtimeLogConfigEndPoints" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontRealtimeLogConfigEndPoints {

};
```


### DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig <a name="DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference <a name="DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.streamArn">StreamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig">DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.streamArn"></a>

```csharp
public string StreamArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig">DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfig</a>

---


### DataAwsccCloudfrontRealtimeLogConfigEndPointsList <a name="DataAwsccCloudfrontRealtimeLogConfigEndPointsList" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontRealtimeLogConfigEndPointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.get"></a>

```csharp
private DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference <a name="DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.property.kinesisStreamConfig">KinesisStreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference">DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.property.streamType">StreamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPoints">DataAwsccCloudfrontRealtimeLogConfigEndPoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KinesisStreamConfig`<sup>Required</sup> <a name="KinesisStreamConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.property.kinesisStreamConfig"></a>

```csharp
public DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference KinesisStreamConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference">DataAwsccCloudfrontRealtimeLogConfigEndPointsKinesisStreamConfigOutputReference</a>

---

##### `StreamType`<sup>Required</sup> <a name="StreamType" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.property.streamType"></a>

```csharp
public string StreamType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPointsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCloudfrontRealtimeLogConfigEndPoints InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontRealtimeLogConfig.DataAwsccCloudfrontRealtimeLogConfigEndPoints">DataAwsccCloudfrontRealtimeLogConfigEndPoints</a>

---



