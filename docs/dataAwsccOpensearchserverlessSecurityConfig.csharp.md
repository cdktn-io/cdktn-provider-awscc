# `dataAwsccOpensearchserverlessSecurityConfig` Submodule <a name="`dataAwsccOpensearchserverlessSecurityConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOpensearchserverlessSecurityConfig <a name="DataAwsccOpensearchserverlessSecurityConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/opensearchserverless_security_config awscc_opensearchserverless_security_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserverlessSecurityConfig(Construct Scope, string Id, DataAwsccOpensearchserverlessSecurityConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig">DataAwsccOpensearchserverlessSecurityConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig">DataAwsccOpensearchserverlessSecurityConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccOpensearchserverlessSecurityConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOpensearchserverlessSecurityConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOpensearchserverlessSecurityConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOpensearchserverlessSecurityConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOpensearchserverlessSecurityConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccOpensearchserverlessSecurityConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccOpensearchserverlessSecurityConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccOpensearchserverlessSecurityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/opensearchserverless_security_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOpensearchserverlessSecurityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.iamFederationOptions">IamFederationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference">DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.iamIdentityCenterOptions">IamIdentityCenterOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference">DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.samlOptions">SamlOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference">DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.securityConfigId">SecurityConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IamFederationOptions`<sup>Required</sup> <a name="IamFederationOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.iamFederationOptions"></a>

```csharp
public DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference IamFederationOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference">DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference</a>

---

##### `IamIdentityCenterOptions`<sup>Required</sup> <a name="IamIdentityCenterOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.iamIdentityCenterOptions"></a>

```csharp
public DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference IamIdentityCenterOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference">DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SamlOptions`<sup>Required</sup> <a name="SamlOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.samlOptions"></a>

```csharp
public DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference SamlOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference">DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference</a>

---

##### `SecurityConfigId`<sup>Required</sup> <a name="SecurityConfigId" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.securityConfigId"></a>

```csharp
public string SecurityConfigId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOpensearchserverlessSecurityConfigConfig <a name="DataAwsccOpensearchserverlessSecurityConfigConfig" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserverlessSecurityConfigConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/opensearchserverless_security_config#id DataAwsccOpensearchserverlessSecurityConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions <a name="DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions {

};
```


### DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions <a name="DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions {

};
```


### DataAwsccOpensearchserverlessSecurityConfigSamlOptions <a name="DataAwsccOpensearchserverlessSecurityConfigSamlOptions" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserverlessSecurityConfigSamlOptions {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference <a name="DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.groupAttribute">GroupAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.userAttribute">UserAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions">DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupAttribute`<sup>Required</sup> <a name="GroupAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.groupAttribute"></a>

```csharp
public string GroupAttribute { get; }
```

- *Type:* string

---

##### `UserAttribute`<sup>Required</sup> <a name="UserAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.userAttribute"></a>

```csharp
public string UserAttribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions">DataAwsccOpensearchserverlessSecurityConfigIamFederationOptions</a>

---


### DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference <a name="DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationArn">ApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationDescription">ApplicationDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationName">ApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.groupAttribute">GroupAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.userAttribute">UserAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions">DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationArn"></a>

```csharp
public string ApplicationArn { get; }
```

- *Type:* string

---

##### `ApplicationDescription`<sup>Required</sup> <a name="ApplicationDescription" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationDescription"></a>

```csharp
public string ApplicationDescription { get; }
```

- *Type:* string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.applicationName"></a>

```csharp
public string ApplicationName { get; }
```

- *Type:* string

---

##### `GroupAttribute`<sup>Required</sup> <a name="GroupAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.groupAttribute"></a>

```csharp
public string GroupAttribute { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `UserAttribute`<sup>Required</sup> <a name="UserAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.userAttribute"></a>

```csharp
public string UserAttribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions">DataAwsccOpensearchserverlessSecurityConfigIamIdentityCenterOptions</a>

---


### DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference <a name="DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttribute">GroupAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.openSearchServerlessEntityId">OpenSearchServerlessEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeout">SessionTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttribute">UserAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptions">DataAwsccOpensearchserverlessSecurityConfigSamlOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupAttribute`<sup>Required</sup> <a name="GroupAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.groupAttribute"></a>

```csharp
public string GroupAttribute { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `OpenSearchServerlessEntityId`<sup>Required</sup> <a name="OpenSearchServerlessEntityId" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.openSearchServerlessEntityId"></a>

```csharp
public string OpenSearchServerlessEntityId { get; }
```

- *Type:* string

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.sessionTimeout"></a>

```csharp
public double SessionTimeout { get; }
```

- *Type:* double

---

##### `UserAttribute`<sup>Required</sup> <a name="UserAttribute" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.userAttribute"></a>

```csharp
public string UserAttribute { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptionsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOpensearchserverlessSecurityConfigSamlOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOpensearchserverlessSecurityConfig.DataAwsccOpensearchserverlessSecurityConfigSamlOptions">DataAwsccOpensearchserverlessSecurityConfigSamlOptions</a>

---



