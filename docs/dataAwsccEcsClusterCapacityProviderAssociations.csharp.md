# `dataAwsccEcsClusterCapacityProviderAssociations` Submodule <a name="`dataAwsccEcsClusterCapacityProviderAssociations` Submodule" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEcsClusterCapacityProviderAssociations <a name="DataAwsccEcsClusterCapacityProviderAssociations" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ecs_cluster_capacity_provider_associations awscc_ecs_cluster_capacity_provider_associations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEcsClusterCapacityProviderAssociations(Construct Scope, string Id, DataAwsccEcsClusterCapacityProviderAssociationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig">DataAwsccEcsClusterCapacityProviderAssociationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig">DataAwsccEcsClusterCapacityProviderAssociationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEcsClusterCapacityProviderAssociations resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEcsClusterCapacityProviderAssociations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEcsClusterCapacityProviderAssociations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEcsClusterCapacityProviderAssociations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEcsClusterCapacityProviderAssociations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccEcsClusterCapacityProviderAssociations resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEcsClusterCapacityProviderAssociations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEcsClusterCapacityProviderAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ecs_cluster_capacity_provider_associations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEcsClusterCapacityProviderAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.capacityProviders">CapacityProviders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.defaultCapacityProviderStrategy">DefaultCapacityProviderStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList">DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CapacityProviders`<sup>Required</sup> <a name="CapacityProviders" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.capacityProviders"></a>

```csharp
public string[] CapacityProviders { get; }
```

- *Type:* string[]

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `DefaultCapacityProviderStrategy`<sup>Required</sup> <a name="DefaultCapacityProviderStrategy" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.defaultCapacityProviderStrategy"></a>

```csharp
public DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList DefaultCapacityProviderStrategy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList">DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEcsClusterCapacityProviderAssociationsConfig <a name="DataAwsccEcsClusterCapacityProviderAssociationsConfig" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEcsClusterCapacityProviderAssociationsConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ecs_cluster_capacity_provider_associations#id DataAwsccEcsClusterCapacityProviderAssociations#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy <a name="DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList <a name="DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.get"></a>

```csharp
private DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference <a name="DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.base">Base</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.capacityProvider">CapacityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Base`<sup>Required</sup> <a name="Base" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.base"></a>

```csharp
public double Base { get; }
```

- *Type:* double

---

##### `CapacityProvider`<sup>Required</sup> <a name="CapacityProvider" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```csharp
public string CapacityProvider { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategyOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEcsClusterCapacityProviderAssociations.DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy">DataAwsccEcsClusterCapacityProviderAssociationsDefaultCapacityProviderStrategy</a>

---



