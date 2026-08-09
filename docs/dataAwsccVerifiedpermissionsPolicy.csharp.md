# `dataAwsccVerifiedpermissionsPolicy` Submodule <a name="`dataAwsccVerifiedpermissionsPolicy` Submodule" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccVerifiedpermissionsPolicy <a name="DataAwsccVerifiedpermissionsPolicy" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/verifiedpermissions_policy awscc_verifiedpermissions_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicy(Construct Scope, string Id, DataAwsccVerifiedpermissionsPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig">DataAwsccVerifiedpermissionsPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig">DataAwsccVerifiedpermissionsPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccVerifiedpermissionsPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccVerifiedpermissionsPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccVerifiedpermissionsPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccVerifiedpermissionsPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccVerifiedpermissionsPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccVerifiedpermissionsPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccVerifiedpermissionsPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccVerifiedpermissionsPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/verifiedpermissions_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccVerifiedpermissionsPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.definition">Definition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference">DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.policyStoreId">PolicyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.definition"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference Definition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference">DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `PolicyStoreId`<sup>Required</sup> <a name="PolicyStoreId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.policyStoreId"></a>

```csharp
public string PolicyStoreId { get; }
```

- *Type:* string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccVerifiedpermissionsPolicyConfig <a name="DataAwsccVerifiedpermissionsPolicyConfig" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/verifiedpermissions_policy#id DataAwsccVerifiedpermissionsPolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccVerifiedpermissionsPolicyDefinition <a name="DataAwsccVerifiedpermissionsPolicyDefinition" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyDefinition {

};
```


### DataAwsccVerifiedpermissionsPolicyDefinitionStatic <a name="DataAwsccVerifiedpermissionsPolicyDefinitionStatic" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStatic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStatic.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyDefinitionStatic {

};
```


### DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked <a name="DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked {

};
```


### DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal <a name="DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal {

};
```


### DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource <a name="DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference <a name="DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.property.static">Static</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference">DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.property.templateLinked">TemplateLinked</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinition">DataAwsccVerifiedpermissionsPolicyDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Static`<sup>Required</sup> <a name="Static" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.property.static"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference Static { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference">DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference</a>

---

##### `TemplateLinked`<sup>Required</sup> <a name="TemplateLinked" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.property.templateLinked"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference TemplateLinked { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyDefinition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinition">DataAwsccVerifiedpermissionsPolicyDefinition</a>

---


### DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference <a name="DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.property.statement">Statement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStatic">DataAwsccVerifiedpermissionsPolicyDefinitionStatic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Statement`<sup>Required</sup> <a name="Statement" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.property.statement"></a>

```csharp
public string Statement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStaticOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyDefinitionStatic InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionStatic">DataAwsccVerifiedpermissionsPolicyDefinitionStatic</a>

---


### DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference <a name="DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.policyTemplateId">PolicyTemplateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.principal">Principal</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.resource">Resource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyTemplateId`<sup>Required</sup> <a name="PolicyTemplateId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.policyTemplateId"></a>

```csharp
public string PolicyTemplateId { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.principal"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference Principal { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference</a>

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.resource"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference Resource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinked</a>

---


### DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference <a name="DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityType">EntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.entityType"></a>

```csharp
public string EntityType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipalOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedPrincipal</a>

---


### DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference <a name="DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityType">EntityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.entityType"></a>

```csharp
public string EntityType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccVerifiedpermissionsPolicy.DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource">DataAwsccVerifiedpermissionsPolicyDefinitionTemplateLinkedResource</a>

---



