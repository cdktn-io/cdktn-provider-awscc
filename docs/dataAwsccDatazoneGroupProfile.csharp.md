# `dataAwsccDatazoneGroupProfile` Submodule <a name="`dataAwsccDatazoneGroupProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatazoneGroupProfile <a name="DataAwsccDatazoneGroupProfile" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datazone_group_profile awscc_datazone_group_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatazoneGroupProfile(Construct Scope, string Id, DataAwsccDatazoneGroupProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfileConfig">DataAwsccDatazoneGroupProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfileConfig">DataAwsccDatazoneGroupProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatazoneGroupProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDatazoneGroupProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDatazoneGroupProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDatazoneGroupProfile.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDatazoneGroupProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccDatazoneGroupProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDatazoneGroupProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDatazoneGroupProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datazone_group_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatazoneGroupProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.domainIdentifier">DomainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.groupIdentifier">GroupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.groupProfileId">GroupProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.groupType">GroupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.rolePrincipalArn">RolePrincipalArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.rolePrincipalId">RolePrincipalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.domainIdentifier"></a>

```csharp
public string DomainIdentifier { get; }
```

- *Type:* string

---

##### `GroupIdentifier`<sup>Required</sup> <a name="GroupIdentifier" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.groupIdentifier"></a>

```csharp
public string GroupIdentifier { get; }
```

- *Type:* string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `GroupProfileId`<sup>Required</sup> <a name="GroupProfileId" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.groupProfileId"></a>

```csharp
public string GroupProfileId { get; }
```

- *Type:* string

---

##### `GroupType`<sup>Required</sup> <a name="GroupType" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.groupType"></a>

```csharp
public string GroupType { get; }
```

- *Type:* string

---

##### `RolePrincipalArn`<sup>Required</sup> <a name="RolePrincipalArn" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.rolePrincipalArn"></a>

```csharp
public string RolePrincipalArn { get; }
```

- *Type:* string

---

##### `RolePrincipalId`<sup>Required</sup> <a name="RolePrincipalId" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.rolePrincipalId"></a>

```csharp
public string RolePrincipalId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatazoneGroupProfileConfig <a name="DataAwsccDatazoneGroupProfileConfig" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatazoneGroupProfileConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfileConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatazoneGroupProfile.DataAwsccDatazoneGroupProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datazone_group_profile#id DataAwsccDatazoneGroupProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



