# `dataAwsccBedrockFlowAlias` Submodule <a name="`dataAwsccBedrockFlowAlias` Submodule" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBedrockFlowAlias <a name="DataAwsccBedrockFlowAlias" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_flow_alias awscc_bedrock_flow_alias}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockFlowAlias(Construct Scope, string Id, DataAwsccBedrockFlowAliasConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConfig">DataAwsccBedrockFlowAliasConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConfig">DataAwsccBedrockFlowAliasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBedrockFlowAlias resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockFlowAlias.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockFlowAlias.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockFlowAlias.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccBedrockFlowAlias.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccBedrockFlowAlias resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccBedrockFlowAlias to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccBedrockFlowAlias that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_flow_alias#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBedrockFlowAlias to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.concurrencyConfiguration">ConcurrencyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference">DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.flowAliasId">FlowAliasId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.flowArn">FlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.flowId">FlowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.routingConfiguration">RoutingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList">DataAwsccBedrockFlowAliasRoutingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ConcurrencyConfiguration`<sup>Required</sup> <a name="ConcurrencyConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.concurrencyConfiguration"></a>

```csharp
public DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference ConcurrencyConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference">DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FlowAliasId`<sup>Required</sup> <a name="FlowAliasId" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.flowAliasId"></a>

```csharp
public string FlowAliasId { get; }
```

- *Type:* string

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.flowArn"></a>

```csharp
public string FlowArn { get; }
```

- *Type:* string

---

##### `FlowId`<sup>Required</sup> <a name="FlowId" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.flowId"></a>

```csharp
public string FlowId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoutingConfiguration`<sup>Required</sup> <a name="RoutingConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.routingConfiguration"></a>

```csharp
public DataAwsccBedrockFlowAliasRoutingConfigurationList RoutingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList">DataAwsccBedrockFlowAliasRoutingConfigurationList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAlias.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBedrockFlowAliasConcurrencyConfiguration <a name="DataAwsccBedrockFlowAliasConcurrencyConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockFlowAliasConcurrencyConfiguration {

};
```


### DataAwsccBedrockFlowAliasConfig <a name="DataAwsccBedrockFlowAliasConfig" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockFlowAliasConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/bedrock_flow_alias#id DataAwsccBedrockFlowAlias#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBedrockFlowAliasRoutingConfiguration <a name="DataAwsccBedrockFlowAliasRoutingConfiguration" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockFlowAliasRoutingConfiguration {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference <a name="DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.property.maxConcurrency">MaxConcurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfiguration">DataAwsccBedrockFlowAliasConcurrencyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxConcurrency`<sup>Required</sup> <a name="MaxConcurrency" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.property.maxConcurrency"></a>

```csharp
public double MaxConcurrency { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockFlowAliasConcurrencyConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasConcurrencyConfiguration">DataAwsccBedrockFlowAliasConcurrencyConfiguration</a>

---


### DataAwsccBedrockFlowAliasRoutingConfigurationList <a name="DataAwsccBedrockFlowAliasRoutingConfigurationList" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockFlowAliasRoutingConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.get"></a>

```csharp
private DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference <a name="DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.property.flowVersion">FlowVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfiguration">DataAwsccBedrockFlowAliasRoutingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FlowVersion`<sup>Required</sup> <a name="FlowVersion" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.property.flowVersion"></a>

```csharp
public string FlowVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccBedrockFlowAliasRoutingConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBedrockFlowAlias.DataAwsccBedrockFlowAliasRoutingConfiguration">DataAwsccBedrockFlowAliasRoutingConfiguration</a>

---



