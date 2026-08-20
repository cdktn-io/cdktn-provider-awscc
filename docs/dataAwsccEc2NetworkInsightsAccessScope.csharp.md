# `dataAwsccEc2NetworkInsightsAccessScope` Submodule <a name="`dataAwsccEc2NetworkInsightsAccessScope` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2NetworkInsightsAccessScope <a name="DataAwsccEc2NetworkInsightsAccessScope" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_network_insights_access_scope awscc_ec2_network_insights_access_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScope(Construct Scope, string Id, DataAwsccEc2NetworkInsightsAccessScopeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig">DataAwsccEc2NetworkInsightsAccessScopeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig">DataAwsccEc2NetworkInsightsAccessScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2NetworkInsightsAccessScope resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2NetworkInsightsAccessScope.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2NetworkInsightsAccessScope.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2NetworkInsightsAccessScope.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2NetworkInsightsAccessScope.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccEc2NetworkInsightsAccessScope resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2NetworkInsightsAccessScope to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2NetworkInsightsAccessScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_network_insights_access_scope#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2NetworkInsightsAccessScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.excludePaths">ExcludePaths</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.matchPaths">MatchPaths</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.networkInsightsAccessScopeArn">NetworkInsightsAccessScopeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.networkInsightsAccessScopeId">NetworkInsightsAccessScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList">DataAwsccEc2NetworkInsightsAccessScopeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.updatedDate">UpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `ExcludePaths`<sup>Required</sup> <a name="ExcludePaths" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.excludePaths"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList ExcludePaths { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList</a>

---

##### `MatchPaths`<sup>Required</sup> <a name="MatchPaths" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.matchPaths"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList MatchPaths { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList</a>

---

##### `NetworkInsightsAccessScopeArn`<sup>Required</sup> <a name="NetworkInsightsAccessScopeArn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.networkInsightsAccessScopeArn"></a>

```csharp
public string NetworkInsightsAccessScopeArn { get; }
```

- *Type:* string

---

##### `NetworkInsightsAccessScopeId`<sup>Required</sup> <a name="NetworkInsightsAccessScopeId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.networkInsightsAccessScopeId"></a>

```csharp
public string NetworkInsightsAccessScopeId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.tags"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList">DataAwsccEc2NetworkInsightsAccessScopeTagsList</a>

---

##### `UpdatedDate`<sup>Required</sup> <a name="UpdatedDate" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.updatedDate"></a>

```csharp
public string UpdatedDate { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScope.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2NetworkInsightsAccessScopeConfig <a name="DataAwsccEc2NetworkInsightsAccessScopeConfig" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/ec2_network_insights_access_scope#id DataAwsccEc2NetworkInsightsAccessScope#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2NetworkInsightsAccessScopeExcludePaths <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePaths" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePaths.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeExcludePaths {

};
```


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination {

};
```


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement {

};
```


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement {

};
```


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource {

};
```


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement {

};
```


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement {

};
```


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources {

};
```


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement {

};
```


### DataAwsccEc2NetworkInsightsAccessScopeMatchPaths <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPaths" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPaths.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeMatchPaths {

};
```


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination {

};
```


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement {

};
```


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement {

};
```


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource {

};
```


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement {

};
```


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement {

};
```


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources {

};
```


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement {

};
```


### DataAwsccEc2NetworkInsightsAccessScopeTags <a name="DataAwsccEc2NetworkInsightsAccessScopeTags" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.packetHeaderStatement">PacketHeaderStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.resourceStatement">ResourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PacketHeaderStatement`<sup>Required</sup> <a name="PacketHeaderStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.packetHeaderStatement"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference PacketHeaderStatement { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference</a>

---

##### `ResourceStatement`<sup>Required</sup> <a name="ResourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.resourceStatement"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference ResourceStatement { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestination</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationAddresses">DestinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPorts">DestinationPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixLists">DestinationPrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.protocols">Protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourceAddresses">SourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePorts">SourcePorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixLists">SourcePrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationAddresses`<sup>Required</sup> <a name="DestinationAddresses" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationAddresses"></a>

```csharp
public string[] DestinationAddresses { get; }
```

- *Type:* string[]

---

##### `DestinationPorts`<sup>Required</sup> <a name="DestinationPorts" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPorts"></a>

```csharp
public string[] DestinationPorts { get; }
```

- *Type:* string[]

---

##### `DestinationPrefixLists`<sup>Required</sup> <a name="DestinationPrefixLists" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixLists"></a>

```csharp
public string[] DestinationPrefixLists { get; }
```

- *Type:* string[]

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.protocols"></a>

```csharp
public string[] Protocols { get; }
```

- *Type:* string[]

---

##### `SourceAddresses`<sup>Required</sup> <a name="SourceAddresses" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourceAddresses"></a>

```csharp
public string[] SourceAddresses { get; }
```

- *Type:* string[]

---

##### `SourcePorts`<sup>Required</sup> <a name="SourcePorts" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePorts"></a>

```csharp
public string[] SourcePorts { get; }
```

- *Type:* string[]

---

##### `SourcePrefixLists`<sup>Required</sup> <a name="SourcePrefixLists" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixLists"></a>

```csharp
public string[] SourcePrefixLists { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatementOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationPacketHeaderStatement</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatementOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationResourceStatement</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.get"></a>

```csharp
private DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.throughResources">ThroughResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePaths">DataAwsccEc2NetworkInsightsAccessScopeExcludePaths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.destination"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference Destination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsDestinationOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.source"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference</a>

---

##### `ThroughResources`<sup>Required</sup> <a name="ThroughResources" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.throughResources"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList ThroughResources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeExcludePaths InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePaths">DataAwsccEc2NetworkInsightsAccessScopeExcludePaths</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.packetHeaderStatement">PacketHeaderStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.resourceStatement">ResourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PacketHeaderStatement`<sup>Required</sup> <a name="PacketHeaderStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.packetHeaderStatement"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference PacketHeaderStatement { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference</a>

---

##### `ResourceStatement`<sup>Required</sup> <a name="ResourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.resourceStatement"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference ResourceStatement { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSource</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationAddresses">DestinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPorts">DestinationPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixLists">DestinationPrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.protocols">Protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourceAddresses">SourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePorts">SourcePorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixLists">SourcePrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationAddresses`<sup>Required</sup> <a name="DestinationAddresses" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationAddresses"></a>

```csharp
public string[] DestinationAddresses { get; }
```

- *Type:* string[]

---

##### `DestinationPorts`<sup>Required</sup> <a name="DestinationPorts" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPorts"></a>

```csharp
public string[] DestinationPorts { get; }
```

- *Type:* string[]

---

##### `DestinationPrefixLists`<sup>Required</sup> <a name="DestinationPrefixLists" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixLists"></a>

```csharp
public string[] DestinationPrefixLists { get; }
```

- *Type:* string[]

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.protocols"></a>

```csharp
public string[] Protocols { get; }
```

- *Type:* string[]

---

##### `SourceAddresses`<sup>Required</sup> <a name="SourceAddresses" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourceAddresses"></a>

```csharp
public string[] SourceAddresses { get; }
```

- *Type:* string[]

---

##### `SourcePorts`<sup>Required</sup> <a name="SourcePorts" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePorts"></a>

```csharp
public string[] SourcePorts { get; }
```

- *Type:* string[]

---

##### `SourcePrefixLists`<sup>Required</sup> <a name="SourcePrefixLists" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixLists"></a>

```csharp
public string[] SourcePrefixLists { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatementOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourcePacketHeaderStatement</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatementOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsSourceResourceStatement</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.get"></a>

```csharp
private DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.resourceStatement">ResourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceStatement`<sup>Required</sup> <a name="ResourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.resourceStatement"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference ResourceStatement { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResources</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatementOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeExcludePathsThroughResourcesResourceStatement</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.packetHeaderStatement">PacketHeaderStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.resourceStatement">ResourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PacketHeaderStatement`<sup>Required</sup> <a name="PacketHeaderStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.packetHeaderStatement"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference PacketHeaderStatement { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference</a>

---

##### `ResourceStatement`<sup>Required</sup> <a name="ResourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.resourceStatement"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference ResourceStatement { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestination</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationAddresses">DestinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPorts">DestinationPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixLists">DestinationPrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.protocols">Protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourceAddresses">SourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePorts">SourcePorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixLists">SourcePrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationAddresses`<sup>Required</sup> <a name="DestinationAddresses" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationAddresses"></a>

```csharp
public string[] DestinationAddresses { get; }
```

- *Type:* string[]

---

##### `DestinationPorts`<sup>Required</sup> <a name="DestinationPorts" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPorts"></a>

```csharp
public string[] DestinationPorts { get; }
```

- *Type:* string[]

---

##### `DestinationPrefixLists`<sup>Required</sup> <a name="DestinationPrefixLists" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.destinationPrefixLists"></a>

```csharp
public string[] DestinationPrefixLists { get; }
```

- *Type:* string[]

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.protocols"></a>

```csharp
public string[] Protocols { get; }
```

- *Type:* string[]

---

##### `SourceAddresses`<sup>Required</sup> <a name="SourceAddresses" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourceAddresses"></a>

```csharp
public string[] SourceAddresses { get; }
```

- *Type:* string[]

---

##### `SourcePorts`<sup>Required</sup> <a name="SourcePorts" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePorts"></a>

```csharp
public string[] SourcePorts { get; }
```

- *Type:* string[]

---

##### `SourcePrefixLists`<sup>Required</sup> <a name="SourcePrefixLists" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.sourcePrefixLists"></a>

```csharp
public string[] SourcePrefixLists { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatementOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationPacketHeaderStatement</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatementOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationResourceStatement</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.get"></a>

```csharp
private DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.throughResources">ThroughResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPaths">DataAwsccEc2NetworkInsightsAccessScopeMatchPaths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.destination"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference Destination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsDestinationOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.source"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference</a>

---

##### `ThroughResources`<sup>Required</sup> <a name="ThroughResources" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.throughResources"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList ThroughResources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeMatchPaths InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPaths">DataAwsccEc2NetworkInsightsAccessScopeMatchPaths</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.packetHeaderStatement">PacketHeaderStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.resourceStatement">ResourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PacketHeaderStatement`<sup>Required</sup> <a name="PacketHeaderStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.packetHeaderStatement"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference PacketHeaderStatement { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference</a>

---

##### `ResourceStatement`<sup>Required</sup> <a name="ResourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.resourceStatement"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference ResourceStatement { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSource</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationAddresses">DestinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPorts">DestinationPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixLists">DestinationPrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.protocols">Protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourceAddresses">SourceAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePorts">SourcePorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixLists">SourcePrefixLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationAddresses`<sup>Required</sup> <a name="DestinationAddresses" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationAddresses"></a>

```csharp
public string[] DestinationAddresses { get; }
```

- *Type:* string[]

---

##### `DestinationPorts`<sup>Required</sup> <a name="DestinationPorts" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPorts"></a>

```csharp
public string[] DestinationPorts { get; }
```

- *Type:* string[]

---

##### `DestinationPrefixLists`<sup>Required</sup> <a name="DestinationPrefixLists" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.destinationPrefixLists"></a>

```csharp
public string[] DestinationPrefixLists { get; }
```

- *Type:* string[]

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.protocols"></a>

```csharp
public string[] Protocols { get; }
```

- *Type:* string[]

---

##### `SourceAddresses`<sup>Required</sup> <a name="SourceAddresses" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourceAddresses"></a>

```csharp
public string[] SourceAddresses { get; }
```

- *Type:* string[]

---

##### `SourcePorts`<sup>Required</sup> <a name="SourcePorts" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePorts"></a>

```csharp
public string[] SourcePorts { get; }
```

- *Type:* string[]

---

##### `SourcePrefixLists`<sup>Required</sup> <a name="SourcePrefixLists" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.sourcePrefixLists"></a>

```csharp
public string[] SourcePrefixLists { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatementOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourcePacketHeaderStatement</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatementOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsSourceResourceStatement</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.get"></a>

```csharp
private DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.resourceStatement">ResourceStatement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceStatement`<sup>Required</sup> <a name="ResourceStatement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.resourceStatement"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference ResourceStatement { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResources</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.resourceTypes"></a>

```csharp
public string[] ResourceTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatementOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement">DataAwsccEc2NetworkInsightsAccessScopeMatchPathsThroughResourcesResourceStatement</a>

---


### DataAwsccEc2NetworkInsightsAccessScopeTagsList <a name="DataAwsccEc2NetworkInsightsAccessScopeTagsList" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.get"></a>

```csharp
private DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTags">DataAwsccEc2NetworkInsightsAccessScopeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScope.DataAwsccEc2NetworkInsightsAccessScopeTags">DataAwsccEc2NetworkInsightsAccessScopeTags</a>

---



