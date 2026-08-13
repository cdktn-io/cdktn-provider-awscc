# `dataAwsccRedshiftserverlessWorkgroup` Submodule <a name="`dataAwsccRedshiftserverlessWorkgroup` Submodule" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRedshiftserverlessWorkgroup <a name="DataAwsccRedshiftserverlessWorkgroup" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/redshiftserverless_workgroup awscc_redshiftserverless_workgroup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroup(Construct Scope, string Id, DataAwsccRedshiftserverlessWorkgroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig">DataAwsccRedshiftserverlessWorkgroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig">DataAwsccRedshiftserverlessWorkgroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRedshiftserverlessWorkgroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRedshiftserverlessWorkgroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRedshiftserverlessWorkgroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRedshiftserverlessWorkgroup.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccRedshiftserverlessWorkgroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccRedshiftserverlessWorkgroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRedshiftserverlessWorkgroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRedshiftserverlessWorkgroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/redshiftserverless_workgroup#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRedshiftserverlessWorkgroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.baseCapacity">BaseCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.configParameters">ConfigParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList">DataAwsccRedshiftserverlessWorkgroupConfigParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.enhancedVpcRouting">EnhancedVpcRouting</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.namespaceName">NamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.pricePerformanceTarget">PricePerformanceTarget</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference">DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.recoveryPointId">RecoveryPointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.snapshotArn">SnapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.snapshotName">SnapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.snapshotOwnerAccount">SnapshotOwnerAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList">DataAwsccRedshiftserverlessWorkgroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.trackName">TrackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.workgroup">Workgroup</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference">DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.workgroupName">WorkgroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `BaseCapacity`<sup>Required</sup> <a name="BaseCapacity" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.baseCapacity"></a>

```csharp
public double BaseCapacity { get; }
```

- *Type:* double

---

##### `ConfigParameters`<sup>Required</sup> <a name="ConfigParameters" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.configParameters"></a>

```csharp
public DataAwsccRedshiftserverlessWorkgroupConfigParametersList ConfigParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList">DataAwsccRedshiftserverlessWorkgroupConfigParametersList</a>

---

##### `EnhancedVpcRouting`<sup>Required</sup> <a name="EnhancedVpcRouting" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.enhancedVpcRouting"></a>

```csharp
public IResolvable EnhancedVpcRouting { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.namespaceName"></a>

```csharp
public string NamespaceName { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PricePerformanceTarget`<sup>Required</sup> <a name="PricePerformanceTarget" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.pricePerformanceTarget"></a>

```csharp
public DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference PricePerformanceTarget { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference">DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference</a>

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.publiclyAccessible"></a>

```csharp
public IResolvable PubliclyAccessible { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `RecoveryPointId`<sup>Required</sup> <a name="RecoveryPointId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.recoveryPointId"></a>

```csharp
public string RecoveryPointId { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SnapshotArn`<sup>Required</sup> <a name="SnapshotArn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.snapshotArn"></a>

```csharp
public string SnapshotArn { get; }
```

- *Type:* string

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.snapshotName"></a>

```csharp
public string SnapshotName { get; }
```

- *Type:* string

---

##### `SnapshotOwnerAccount`<sup>Required</sup> <a name="SnapshotOwnerAccount" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.snapshotOwnerAccount"></a>

```csharp
public string SnapshotOwnerAccount { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.tags"></a>

```csharp
public DataAwsccRedshiftserverlessWorkgroupTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList">DataAwsccRedshiftserverlessWorkgroupTagsList</a>

---

##### `TrackName`<sup>Required</sup> <a name="TrackName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.trackName"></a>

```csharp
public string TrackName { get; }
```

- *Type:* string

---

##### `Workgroup`<sup>Required</sup> <a name="Workgroup" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.workgroup"></a>

```csharp
public DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference Workgroup { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference">DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference</a>

---

##### `WorkgroupName`<sup>Required</sup> <a name="WorkgroupName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.workgroupName"></a>

```csharp
public string WorkgroupName { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRedshiftserverlessWorkgroupConfig <a name="DataAwsccRedshiftserverlessWorkgroupConfig" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/redshiftserverless_workgroup#id DataAwsccRedshiftserverlessWorkgroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRedshiftserverlessWorkgroupConfigParameters <a name="DataAwsccRedshiftserverlessWorkgroupConfigParameters" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupConfigParameters {

};
```


### DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget <a name="DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget {

};
```


### DataAwsccRedshiftserverlessWorkgroupTags <a name="DataAwsccRedshiftserverlessWorkgroupTags" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupTags {

};
```


### DataAwsccRedshiftserverlessWorkgroupWorkgroup <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroup" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupWorkgroup {

};
```


### DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters {

};
```


### DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint {

};
```


### DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints {

};
```


### DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces {

};
```


### DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRedshiftserverlessWorkgroupConfigParametersList <a name="DataAwsccRedshiftserverlessWorkgroupConfigParametersList" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupConfigParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.get"></a>

```csharp
private DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference <a name="DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterKey">ParameterKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterValue">ParameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParameters">DataAwsccRedshiftserverlessWorkgroupConfigParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParameterKey`<sup>Required</sup> <a name="ParameterKey" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterKey"></a>

```csharp
public string ParameterKey { get; }
```

- *Type:* string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.property.parameterValue"></a>

```csharp
public string ParameterValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRedshiftserverlessWorkgroupConfigParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupConfigParameters">DataAwsccRedshiftserverlessWorkgroupConfigParameters</a>

---


### DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference <a name="DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.level">Level</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget">DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.level"></a>

```csharp
public double Level { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTargetOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget">DataAwsccRedshiftserverlessWorkgroupPricePerformanceTarget</a>

---


### DataAwsccRedshiftserverlessWorkgroupTagsList <a name="DataAwsccRedshiftserverlessWorkgroupTagsList" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.get"></a>

```csharp
private DataAwsccRedshiftserverlessWorkgroupTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccRedshiftserverlessWorkgroupTagsOutputReference <a name="DataAwsccRedshiftserverlessWorkgroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTags">DataAwsccRedshiftserverlessWorkgroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRedshiftserverlessWorkgroupTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupTags">DataAwsccRedshiftserverlessWorkgroupTags</a>

---


### DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.get"></a>

```csharp
private DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.parameterKey">ParameterKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.parameterValue">ParameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters">DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParameterKey`<sup>Required</sup> <a name="ParameterKey" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.parameterKey"></a>

```csharp
public string ParameterKey { get; }
```

- *Type:* string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.parameterValue"></a>

```csharp
public string ParameterValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters">DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParameters</a>

---


### DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.vpcEndpoints">VpcEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `VpcEndpoints`<sup>Required</sup> <a name="VpcEndpoints" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.vpcEndpoints"></a>

```csharp
public DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList VpcEndpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpoint</a>

---


### DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.get"></a>

```csharp
private DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.get"></a>

```csharp
private DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.privateIpAddress">PrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `PrivateIpAddress`<sup>Required</sup> <a name="PrivateIpAddress" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```csharp
public string PrivateIpAddress { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfaces</a>

---


### DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.networkInterfaces">NetworkInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInterfaces`<sup>Required</sup> <a name="NetworkInterfaces" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.networkInterfaces"></a>

```csharp
public DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList NetworkInterfaces { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsNetworkInterfacesList</a>

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpointsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointVpcEndpoints</a>

---


### DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.baseCapacity">BaseCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.configParameters">ConfigParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList">DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.creationDate">CreationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.enhancedVpcRouting">EnhancedVpcRouting</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.namespaceName">NamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.pricePerformanceTarget">PricePerformanceTarget</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference">DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.trackName">TrackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupArn">WorkgroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupId">WorkgroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupName">WorkgroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroup">DataAwsccRedshiftserverlessWorkgroupWorkgroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseCapacity`<sup>Required</sup> <a name="BaseCapacity" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.baseCapacity"></a>

```csharp
public double BaseCapacity { get; }
```

- *Type:* double

---

##### `ConfigParameters`<sup>Required</sup> <a name="ConfigParameters" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.configParameters"></a>

```csharp
public DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList ConfigParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList">DataAwsccRedshiftserverlessWorkgroupWorkgroupConfigParametersList</a>

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.creationDate"></a>

```csharp
public string CreationDate { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.endpoint"></a>

```csharp
public DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference Endpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference">DataAwsccRedshiftserverlessWorkgroupWorkgroupEndpointOutputReference</a>

---

##### `EnhancedVpcRouting`<sup>Required</sup> <a name="EnhancedVpcRouting" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.enhancedVpcRouting"></a>

```csharp
public IResolvable EnhancedVpcRouting { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.namespaceName"></a>

```csharp
public string NamespaceName { get; }
```

- *Type:* string

---

##### `PricePerformanceTarget`<sup>Required</sup> <a name="PricePerformanceTarget" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.pricePerformanceTarget"></a>

```csharp
public DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference PricePerformanceTarget { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference">DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference</a>

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.publiclyAccessible"></a>

```csharp
public IResolvable PubliclyAccessible { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `TrackName`<sup>Required</sup> <a name="TrackName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.trackName"></a>

```csharp
public string TrackName { get; }
```

- *Type:* string

---

##### `WorkgroupArn`<sup>Required</sup> <a name="WorkgroupArn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupArn"></a>

```csharp
public string WorkgroupArn { get; }
```

- *Type:* string

---

##### `WorkgroupId`<sup>Required</sup> <a name="WorkgroupId" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupId"></a>

```csharp
public string WorkgroupId { get; }
```

- *Type:* string

---

##### `WorkgroupName`<sup>Required</sup> <a name="WorkgroupName" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.workgroupName"></a>

```csharp
public string WorkgroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRedshiftserverlessWorkgroupWorkgroup InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroup">DataAwsccRedshiftserverlessWorkgroupWorkgroup</a>

---


### DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference <a name="DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.level">Level</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget">DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.level"></a>

```csharp
public double Level { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTargetOutputReference.property.internalValue"></a>

```csharp
public DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRedshiftserverlessWorkgroup.DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget">DataAwsccRedshiftserverlessWorkgroupWorkgroupPricePerformanceTarget</a>

---



