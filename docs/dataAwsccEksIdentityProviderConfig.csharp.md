# `dataAwsccEksIdentityProviderConfig` Submodule <a name="`dataAwsccEksIdentityProviderConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEksIdentityProviderConfig <a name="DataAwsccEksIdentityProviderConfig" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/eks_identity_provider_config awscc_eks_identity_provider_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEksIdentityProviderConfig(Construct Scope, string Id, DataAwsccEksIdentityProviderConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig">DataAwsccEksIdentityProviderConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig">DataAwsccEksIdentityProviderConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEksIdentityProviderConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEksIdentityProviderConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEksIdentityProviderConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEksIdentityProviderConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEksIdentityProviderConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccEksIdentityProviderConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEksIdentityProviderConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEksIdentityProviderConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/eks_identity_provider_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEksIdentityProviderConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.identityProviderConfigArn">IdentityProviderConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.identityProviderConfigName">IdentityProviderConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.oidc">Oidc</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference">DataAwsccEksIdentityProviderConfigOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList">DataAwsccEksIdentityProviderConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `IdentityProviderConfigArn`<sup>Required</sup> <a name="IdentityProviderConfigArn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.identityProviderConfigArn"></a>

```csharp
public string IdentityProviderConfigArn { get; }
```

- *Type:* string

---

##### `IdentityProviderConfigName`<sup>Required</sup> <a name="IdentityProviderConfigName" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.identityProviderConfigName"></a>

```csharp
public string IdentityProviderConfigName { get; }
```

- *Type:* string

---

##### `Oidc`<sup>Required</sup> <a name="Oidc" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.oidc"></a>

```csharp
public DataAwsccEksIdentityProviderConfigOidcOutputReference Oidc { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference">DataAwsccEksIdentityProviderConfigOidcOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.tags"></a>

```csharp
public DataAwsccEksIdentityProviderConfigTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList">DataAwsccEksIdentityProviderConfigTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEksIdentityProviderConfigConfig <a name="DataAwsccEksIdentityProviderConfigConfig" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEksIdentityProviderConfigConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/eks_identity_provider_config#id DataAwsccEksIdentityProviderConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEksIdentityProviderConfigOidc <a name="DataAwsccEksIdentityProviderConfigOidc" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidc.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEksIdentityProviderConfigOidc {

};
```


### DataAwsccEksIdentityProviderConfigOidcRequiredClaims <a name="DataAwsccEksIdentityProviderConfigOidcRequiredClaims" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaims.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEksIdentityProviderConfigOidcRequiredClaims {

};
```


### DataAwsccEksIdentityProviderConfigTags <a name="DataAwsccEksIdentityProviderConfigTags" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEksIdentityProviderConfigTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEksIdentityProviderConfigOidcOutputReference <a name="DataAwsccEksIdentityProviderConfigOidcOutputReference" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEksIdentityProviderConfigOidcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.groupsClaim">GroupsClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.groupsPrefix">GroupsPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.requiredClaims">RequiredClaims</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList">DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.usernameClaim">UsernameClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.usernamePrefix">UsernamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidc">DataAwsccEksIdentityProviderConfigOidc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `GroupsClaim`<sup>Required</sup> <a name="GroupsClaim" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.groupsClaim"></a>

```csharp
public string GroupsClaim { get; }
```

- *Type:* string

---

##### `GroupsPrefix`<sup>Required</sup> <a name="GroupsPrefix" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.groupsPrefix"></a>

```csharp
public string GroupsPrefix { get; }
```

- *Type:* string

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; }
```

- *Type:* string

---

##### `RequiredClaims`<sup>Required</sup> <a name="RequiredClaims" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.requiredClaims"></a>

```csharp
public DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList RequiredClaims { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList">DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList</a>

---

##### `UsernameClaim`<sup>Required</sup> <a name="UsernameClaim" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.usernameClaim"></a>

```csharp
public string UsernameClaim { get; }
```

- *Type:* string

---

##### `UsernamePrefix`<sup>Required</sup> <a name="UsernamePrefix" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.usernamePrefix"></a>

```csharp
public string UsernamePrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEksIdentityProviderConfigOidc InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidc">DataAwsccEksIdentityProviderConfigOidc</a>

---


### DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList <a name="DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.get"></a>

```csharp
private DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference <a name="DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaims">DataAwsccEksIdentityProviderConfigOidcRequiredClaims</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEksIdentityProviderConfigOidcRequiredClaims InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaims">DataAwsccEksIdentityProviderConfigOidcRequiredClaims</a>

---


### DataAwsccEksIdentityProviderConfigTagsList <a name="DataAwsccEksIdentityProviderConfigTagsList" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEksIdentityProviderConfigTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.get"></a>

```csharp
private DataAwsccEksIdentityProviderConfigTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEksIdentityProviderConfigTagsOutputReference <a name="DataAwsccEksIdentityProviderConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEksIdentityProviderConfigTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTags">DataAwsccEksIdentityProviderConfigTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEksIdentityProviderConfigTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTags">DataAwsccEksIdentityProviderConfigTags</a>

---



