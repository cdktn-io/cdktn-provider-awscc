# `dataAwsccWorkspacesWorkspacesPool` Submodule <a name="`dataAwsccWorkspacesWorkspacesPool` Submodule" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWorkspacesWorkspacesPool <a name="DataAwsccWorkspacesWorkspacesPool" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspaces_workspaces_pool awscc_workspaces_workspaces_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesWorkspacesPool(Construct Scope, string Id, DataAwsccWorkspacesWorkspacesPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig">DataAwsccWorkspacesWorkspacesPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig">DataAwsccWorkspacesWorkspacesPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWorkspacesWorkspacesPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspacesWorkspacesPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspacesWorkspacesPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspacesWorkspacesPool.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWorkspacesWorkspacesPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccWorkspacesWorkspacesPool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccWorkspacesWorkspacesPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccWorkspacesWorkspacesPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspaces_workspaces_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWorkspacesWorkspacesPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.applicationSettings">ApplicationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference">DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.bundleId">BundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.capacity">Capacity</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference">DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.poolArn">PoolArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.poolId">PoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.poolName">PoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.runningMode">RunningMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList">DataAwsccWorkspacesWorkspacesPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.timeoutSettings">TimeoutSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference">DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ApplicationSettings`<sup>Required</sup> <a name="ApplicationSettings" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.applicationSettings"></a>

```csharp
public DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference ApplicationSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference">DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference</a>

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.bundleId"></a>

```csharp
public string BundleId { get; }
```

- *Type:* string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.capacity"></a>

```csharp
public DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference Capacity { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference">DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `PoolArn`<sup>Required</sup> <a name="PoolArn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.poolArn"></a>

```csharp
public string PoolArn { get; }
```

- *Type:* string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.poolId"></a>

```csharp
public string PoolId { get; }
```

- *Type:* string

---

##### `PoolName`<sup>Required</sup> <a name="PoolName" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.poolName"></a>

```csharp
public string PoolName { get; }
```

- *Type:* string

---

##### `RunningMode`<sup>Required</sup> <a name="RunningMode" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.runningMode"></a>

```csharp
public string RunningMode { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.tags"></a>

```csharp
public DataAwsccWorkspacesWorkspacesPoolTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList">DataAwsccWorkspacesWorkspacesPoolTagsList</a>

---

##### `TimeoutSettings`<sup>Required</sup> <a name="TimeoutSettings" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.timeoutSettings"></a>

```csharp
public DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference TimeoutSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference">DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWorkspacesWorkspacesPoolApplicationSettings <a name="DataAwsccWorkspacesWorkspacesPoolApplicationSettings" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesWorkspacesPoolApplicationSettings {

};
```


### DataAwsccWorkspacesWorkspacesPoolCapacity <a name="DataAwsccWorkspacesWorkspacesPoolCapacity" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesWorkspacesPoolCapacity {

};
```


### DataAwsccWorkspacesWorkspacesPoolConfig <a name="DataAwsccWorkspacesWorkspacesPoolConfig" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesWorkspacesPoolConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/workspaces_workspaces_pool#id DataAwsccWorkspacesWorkspacesPool#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWorkspacesWorkspacesPoolTags <a name="DataAwsccWorkspacesWorkspacesPoolTags" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesWorkspacesPoolTags {

};
```


### DataAwsccWorkspacesWorkspacesPoolTimeoutSettings <a name="DataAwsccWorkspacesWorkspacesPoolTimeoutSettings" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesWorkspacesPoolTimeoutSettings {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference <a name="DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroup">SettingsGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettings">DataAwsccWorkspacesWorkspacesPoolApplicationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SettingsGroup`<sup>Required</sup> <a name="SettingsGroup" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.settingsGroup"></a>

```csharp
public string SettingsGroup { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspacesWorkspacesPoolApplicationSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolApplicationSettings">DataAwsccWorkspacesWorkspacesPoolApplicationSettings</a>

---


### DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference <a name="DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessions">DesiredUserSessions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacity">DataAwsccWorkspacesWorkspacesPoolCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DesiredUserSessions`<sup>Required</sup> <a name="DesiredUserSessions" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.property.desiredUserSessions"></a>

```csharp
public double DesiredUserSessions { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacityOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspacesWorkspacesPoolCapacity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolCapacity">DataAwsccWorkspacesWorkspacesPoolCapacity</a>

---


### DataAwsccWorkspacesWorkspacesPoolTagsList <a name="DataAwsccWorkspacesWorkspacesPoolTagsList" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesWorkspacesPoolTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.get"></a>

```csharp
private DataAwsccWorkspacesWorkspacesPoolTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccWorkspacesWorkspacesPoolTagsOutputReference <a name="DataAwsccWorkspacesWorkspacesPoolTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesWorkspacesPoolTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTags">DataAwsccWorkspacesWorkspacesPoolTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspacesWorkspacesPoolTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTags">DataAwsccWorkspacesWorkspacesPoolTags</a>

---


### DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference <a name="DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSeconds">DisconnectTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSeconds">IdleDisconnectTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSeconds">MaxUserDurationInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettings">DataAwsccWorkspacesWorkspacesPoolTimeoutSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisconnectTimeoutInSeconds`<sup>Required</sup> <a name="DisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSeconds"></a>

```csharp
public double DisconnectTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `IdleDisconnectTimeoutInSeconds`<sup>Required</sup> <a name="IdleDisconnectTimeoutInSeconds" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSeconds"></a>

```csharp
public double IdleDisconnectTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `MaxUserDurationInSeconds`<sup>Required</sup> <a name="MaxUserDurationInSeconds" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSeconds"></a>

```csharp
public double MaxUserDurationInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWorkspacesWorkspacesPoolTimeoutSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWorkspacesWorkspacesPool.DataAwsccWorkspacesWorkspacesPoolTimeoutSettings">DataAwsccWorkspacesWorkspacesPoolTimeoutSettings</a>

---



