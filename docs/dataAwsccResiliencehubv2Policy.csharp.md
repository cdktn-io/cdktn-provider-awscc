# `dataAwsccResiliencehubv2Policy` Submodule <a name="`dataAwsccResiliencehubv2Policy` Submodule" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccResiliencehubv2Policy <a name="DataAwsccResiliencehubv2Policy" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/resiliencehubv2_policy awscc_resiliencehubv2_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubv2Policy(Construct Scope, string Id, DataAwsccResiliencehubv2PolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyConfig">DataAwsccResiliencehubv2PolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyConfig">DataAwsccResiliencehubv2PolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccResiliencehubv2Policy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccResiliencehubv2Policy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccResiliencehubv2Policy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccResiliencehubv2Policy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccResiliencehubv2Policy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccResiliencehubv2Policy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccResiliencehubv2Policy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccResiliencehubv2Policy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/resiliencehubv2_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccResiliencehubv2Policy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.associatedServiceCount">AssociatedServiceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.availabilitySlo">AvailabilitySlo</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference">DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.dataRecovery">DataRecovery</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference">DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.multiAz">MultiAz</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference">DataAwsccResiliencehubv2PolicyMultiAzOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.multiRegion">MultiRegion</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference">DataAwsccResiliencehubv2PolicyMultiRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.policyArn">PolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList">DataAwsccResiliencehubv2PolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AssociatedServiceCount`<sup>Required</sup> <a name="AssociatedServiceCount" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.associatedServiceCount"></a>

```csharp
public double AssociatedServiceCount { get; }
```

- *Type:* double

---

##### `AvailabilitySlo`<sup>Required</sup> <a name="AvailabilitySlo" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.availabilitySlo"></a>

```csharp
public DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference AvailabilitySlo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference">DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DataRecovery`<sup>Required</sup> <a name="DataRecovery" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.dataRecovery"></a>

```csharp
public DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference DataRecovery { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference">DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `MultiAz`<sup>Required</sup> <a name="MultiAz" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.multiAz"></a>

```csharp
public DataAwsccResiliencehubv2PolicyMultiAzOutputReference MultiAz { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference">DataAwsccResiliencehubv2PolicyMultiAzOutputReference</a>

---

##### `MultiRegion`<sup>Required</sup> <a name="MultiRegion" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.multiRegion"></a>

```csharp
public DataAwsccResiliencehubv2PolicyMultiRegionOutputReference MultiRegion { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference">DataAwsccResiliencehubv2PolicyMultiRegionOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.policyArn"></a>

```csharp
public string PolicyArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.tags"></a>

```csharp
public DataAwsccResiliencehubv2PolicyTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList">DataAwsccResiliencehubv2PolicyTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2Policy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccResiliencehubv2PolicyAvailabilitySlo <a name="DataAwsccResiliencehubv2PolicyAvailabilitySlo" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySlo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySlo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubv2PolicyAvailabilitySlo {

};
```


### DataAwsccResiliencehubv2PolicyConfig <a name="DataAwsccResiliencehubv2PolicyConfig" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubv2PolicyConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/resiliencehubv2_policy#id DataAwsccResiliencehubv2Policy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccResiliencehubv2PolicyDataRecovery <a name="DataAwsccResiliencehubv2PolicyDataRecovery" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecovery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubv2PolicyDataRecovery {

};
```


### DataAwsccResiliencehubv2PolicyMultiAz <a name="DataAwsccResiliencehubv2PolicyMultiAz" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAz"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAz.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubv2PolicyMultiAz {

};
```


### DataAwsccResiliencehubv2PolicyMultiRegion <a name="DataAwsccResiliencehubv2PolicyMultiRegion" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubv2PolicyMultiRegion {

};
```


### DataAwsccResiliencehubv2PolicyTags <a name="DataAwsccResiliencehubv2PolicyTags" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubv2PolicyTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference <a name="DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.property.target">Target</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySlo">DataAwsccResiliencehubv2PolicyAvailabilitySlo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.property.target"></a>

```csharp
public double Target { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySloOutputReference.property.internalValue"></a>

```csharp
public DataAwsccResiliencehubv2PolicyAvailabilitySlo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyAvailabilitySlo">DataAwsccResiliencehubv2PolicyAvailabilitySlo</a>

---


### DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference <a name="DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutes">TimeBetweenBackupsInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecovery">DataAwsccResiliencehubv2PolicyDataRecovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeBetweenBackupsInMinutes`<sup>Required</sup> <a name="TimeBetweenBackupsInMinutes" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutes"></a>

```csharp
public double TimeBetweenBackupsInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecoveryOutputReference.property.internalValue"></a>

```csharp
public DataAwsccResiliencehubv2PolicyDataRecovery InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyDataRecovery">DataAwsccResiliencehubv2PolicyDataRecovery</a>

---


### DataAwsccResiliencehubv2PolicyMultiAzOutputReference <a name="DataAwsccResiliencehubv2PolicyMultiAzOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubv2PolicyMultiAzOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproach">DisasterRecoveryApproach</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutes">RpoInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutes">RtoInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAz">DataAwsccResiliencehubv2PolicyMultiAz</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisasterRecoveryApproach`<sup>Required</sup> <a name="DisasterRecoveryApproach" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproach"></a>

```csharp
public string DisasterRecoveryApproach { get; }
```

- *Type:* string

---

##### `RpoInMinutes`<sup>Required</sup> <a name="RpoInMinutes" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutes"></a>

```csharp
public double RpoInMinutes { get; }
```

- *Type:* double

---

##### `RtoInMinutes`<sup>Required</sup> <a name="RtoInMinutes" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutes"></a>

```csharp
public double RtoInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAzOutputReference.property.internalValue"></a>

```csharp
public DataAwsccResiliencehubv2PolicyMultiAz InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiAz">DataAwsccResiliencehubv2PolicyMultiAz</a>

---


### DataAwsccResiliencehubv2PolicyMultiRegionOutputReference <a name="DataAwsccResiliencehubv2PolicyMultiRegionOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubv2PolicyMultiRegionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproach">DisasterRecoveryApproach</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutes">RpoInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutes">RtoInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegion">DataAwsccResiliencehubv2PolicyMultiRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisasterRecoveryApproach`<sup>Required</sup> <a name="DisasterRecoveryApproach" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproach"></a>

```csharp
public string DisasterRecoveryApproach { get; }
```

- *Type:* string

---

##### `RpoInMinutes`<sup>Required</sup> <a name="RpoInMinutes" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutes"></a>

```csharp
public double RpoInMinutes { get; }
```

- *Type:* double

---

##### `RtoInMinutes`<sup>Required</sup> <a name="RtoInMinutes" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutes"></a>

```csharp
public double RtoInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccResiliencehubv2PolicyMultiRegion InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyMultiRegion">DataAwsccResiliencehubv2PolicyMultiRegion</a>

---


### DataAwsccResiliencehubv2PolicyTagsList <a name="DataAwsccResiliencehubv2PolicyTagsList" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubv2PolicyTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.get"></a>

```csharp
private DataAwsccResiliencehubv2PolicyTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccResiliencehubv2PolicyTagsOutputReference <a name="DataAwsccResiliencehubv2PolicyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccResiliencehubv2PolicyTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTags">DataAwsccResiliencehubv2PolicyTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccResiliencehubv2PolicyTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccResiliencehubv2Policy.DataAwsccResiliencehubv2PolicyTags">DataAwsccResiliencehubv2PolicyTags</a>

---



