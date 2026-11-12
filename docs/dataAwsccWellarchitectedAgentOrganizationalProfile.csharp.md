# `dataAwsccWellarchitectedAgentOrganizationalProfile` Submodule <a name="`dataAwsccWellarchitectedAgentOrganizationalProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccWellarchitectedAgentOrganizationalProfile <a name="DataAwsccWellarchitectedAgentOrganizationalProfile" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/wellarchitected_agent_organizational_profile awscc_wellarchitected_agent_organizational_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWellarchitectedAgentOrganizationalProfile(Construct Scope, string Id, DataAwsccWellarchitectedAgentOrganizationalProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileConfig">DataAwsccWellarchitectedAgentOrganizationalProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileConfig">DataAwsccWellarchitectedAgentOrganizationalProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccWellarchitectedAgentOrganizationalProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWellarchitectedAgentOrganizationalProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWellarchitectedAgentOrganizationalProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWellarchitectedAgentOrganizationalProfile.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccWellarchitectedAgentOrganizationalProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccWellarchitectedAgentOrganizationalProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccWellarchitectedAgentOrganizationalProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccWellarchitectedAgentOrganizationalProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/wellarchitected_agent_organizational_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccWellarchitectedAgentOrganizationalProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.businessOverview">BusinessOverview</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.deletionProtection">DeletionProtection</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.lastModifiedAt">LastModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.lastModifiedBy">LastModifiedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.pillars">Pillars</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList">DataAwsccWellarchitectedAgentOrganizationalProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BusinessOverview`<sup>Required</sup> <a name="BusinessOverview" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.businessOverview"></a>

```csharp
public string BusinessOverview { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.deletionProtection"></a>

```csharp
public IResolvable DeletionProtection { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `LastModifiedAt`<sup>Required</sup> <a name="LastModifiedAt" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.lastModifiedAt"></a>

```csharp
public string LastModifiedAt { get; }
```

- *Type:* string

---

##### `LastModifiedBy`<sup>Required</sup> <a name="LastModifiedBy" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.lastModifiedBy"></a>

```csharp
public string LastModifiedBy { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Pillars`<sup>Required</sup> <a name="Pillars" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.pillars"></a>

```csharp
public string[] Pillars { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.tags"></a>

```csharp
public DataAwsccWellarchitectedAgentOrganizationalProfileTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList">DataAwsccWellarchitectedAgentOrganizationalProfileTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccWellarchitectedAgentOrganizationalProfileConfig <a name="DataAwsccWellarchitectedAgentOrganizationalProfileConfig" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWellarchitectedAgentOrganizationalProfileConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/data-sources/wellarchitected_agent_organizational_profile#id DataAwsccWellarchitectedAgentOrganizationalProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccWellarchitectedAgentOrganizationalProfileTags <a name="DataAwsccWellarchitectedAgentOrganizationalProfileTags" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWellarchitectedAgentOrganizationalProfileTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccWellarchitectedAgentOrganizationalProfileTagsList <a name="DataAwsccWellarchitectedAgentOrganizationalProfileTagsList" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWellarchitectedAgentOrganizationalProfileTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.get"></a>

```csharp
private DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference <a name="DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTags">DataAwsccWellarchitectedAgentOrganizationalProfileTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccWellarchitectedAgentOrganizationalProfileTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccWellarchitectedAgentOrganizationalProfile.DataAwsccWellarchitectedAgentOrganizationalProfileTags">DataAwsccWellarchitectedAgentOrganizationalProfileTags</a>

---



