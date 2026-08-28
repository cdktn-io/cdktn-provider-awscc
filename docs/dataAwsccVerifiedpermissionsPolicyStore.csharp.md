# `dataAwsccVerifiedpermissionsPolicyStore` Submodule <a name="`dataAwsccVerifiedpermissionsPolicyStore` Submodule" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccVerifiedpermissionsPolicyStore <a name="DataAwsccVerifiedpermissionsPolicyStore" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/verifiedpermissions_policy_store awscc_verifiedpermissions_policy_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyStore(Construct Scope, string Id, DataAwsccVerifiedpermissionsPolicyStoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig">DataAwsccVerifiedpermissionsPolicyStoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig">DataAwsccVerifiedpermissionsPolicyStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccVerifiedpermissionsPolicyStore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccVerifiedpermissionsPolicyStore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccVerifiedpermissionsPolicyStore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccVerifiedpermissionsPolicyStore.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccVerifiedpermissionsPolicyStore.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccVerifiedpermissionsPolicyStore resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccVerifiedpermissionsPolicyStore to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccVerifiedpermissionsPolicyStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/verifiedpermissions_policy_store#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccVerifiedpermissionsPolicyStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.deletionProtection">DeletionProtection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference">DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.encryptionSettings">EncryptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference">DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.encryptionState">EncryptionState</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference">DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.policyStoreId">PolicyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference">DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList">DataAwsccVerifiedpermissionsPolicyStoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.validationSettings">ValidationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference">DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.deletionProtection"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference DeletionProtection { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference">DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EncryptionSettings`<sup>Required</sup> <a name="EncryptionSettings" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.encryptionSettings"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference EncryptionSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference">DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference</a>

---

##### `EncryptionState`<sup>Required</sup> <a name="EncryptionState" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.encryptionState"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference EncryptionState { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference">DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference</a>

---

##### `PolicyStoreId`<sup>Required</sup> <a name="PolicyStoreId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.policyStoreId"></a>

```csharp
public string PolicyStoreId { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.schema"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference Schema { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference">DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.tags"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyStoreTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList">DataAwsccVerifiedpermissionsPolicyStoreTagsList</a>

---

##### `ValidationSettings`<sup>Required</sup> <a name="ValidationSettings" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.validationSettings"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference ValidationSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference">DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccVerifiedpermissionsPolicyStoreConfig <a name="DataAwsccVerifiedpermissionsPolicyStoreConfig" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyStoreConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/verifiedpermissions_policy_store#id DataAwsccVerifiedpermissionsPolicyStore#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection <a name="DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection {

};
```


### DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings <a name="DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings {

};
```


### DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings <a name="DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings {

};
```


### DataAwsccVerifiedpermissionsPolicyStoreEncryptionState <a name="DataAwsccVerifiedpermissionsPolicyStoreEncryptionState" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionState.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyStoreEncryptionState {

};
```


### DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState <a name="DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState {

};
```


### DataAwsccVerifiedpermissionsPolicyStoreSchema <a name="DataAwsccVerifiedpermissionsPolicyStoreSchema" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyStoreSchema {

};
```


### DataAwsccVerifiedpermissionsPolicyStoreTags <a name="DataAwsccVerifiedpermissionsPolicyStoreTags" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyStoreTags {

};
```


### DataAwsccVerifiedpermissionsPolicyStoreValidationSettings <a name="DataAwsccVerifiedpermissionsPolicyStoreValidationSettings" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyStoreValidationSettings {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference <a name="DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection">DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtectionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection">DataAwsccVerifiedpermissionsPolicyStoreDeletionProtection</a>

---


### DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference <a name="DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.encryptionContext">EncryptionContext</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings">DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionContext`<sup>Required</sup> <a name="EncryptionContext" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.encryptionContext"></a>

```csharp
public StringMap EncryptionContext { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings">DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettings</a>

---


### DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference <a name="DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.kmsEncryptionSettings">KmsEncryptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference">DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings">DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `KmsEncryptionSettings`<sup>Required</sup> <a name="KmsEncryptionSettings" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.kmsEncryptionSettings"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference KmsEncryptionSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference">DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsKmsEncryptionSettingsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings">DataAwsccVerifiedpermissionsPolicyStoreEncryptionSettings</a>

---


### DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference <a name="DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.encryptionContext">EncryptionContext</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState">DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionContext`<sup>Required</sup> <a name="EncryptionContext" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.encryptionContext"></a>

```csharp
public StringMap EncryptionContext { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState">DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionState</a>

---


### DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference <a name="DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.kmsEncryptionState">KmsEncryptionState</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference">DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionState">DataAwsccVerifiedpermissionsPolicyStoreEncryptionState</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `KmsEncryptionState`<sup>Required</sup> <a name="KmsEncryptionState" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.kmsEncryptionState"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference KmsEncryptionState { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference">DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateKmsEncryptionStateOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionStateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyStoreEncryptionState InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreEncryptionState">DataAwsccVerifiedpermissionsPolicyStoreEncryptionState</a>

---


### DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference <a name="DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.property.cedarJson">CedarJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchema">DataAwsccVerifiedpermissionsPolicyStoreSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CedarJson`<sup>Required</sup> <a name="CedarJson" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.property.cedarJson"></a>

```csharp
public string CedarJson { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchemaOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyStoreSchema InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreSchema">DataAwsccVerifiedpermissionsPolicyStoreSchema</a>

---


### DataAwsccVerifiedpermissionsPolicyStoreTagsList <a name="DataAwsccVerifiedpermissionsPolicyStoreTagsList" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyStoreTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.get"></a>

```csharp
private DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference <a name="DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTags">DataAwsccVerifiedpermissionsPolicyStoreTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyStoreTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreTags">DataAwsccVerifiedpermissionsPolicyStoreTags</a>

---


### DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference <a name="DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettings">DataAwsccVerifiedpermissionsPolicyStoreValidationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettingsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyStoreValidationSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicyStore.DataAwsccVerifiedpermissionsPolicyStoreValidationSettings">DataAwsccVerifiedpermissionsPolicyStoreValidationSettings</a>

---



