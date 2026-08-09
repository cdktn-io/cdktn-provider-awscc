# `dataAwsccCognitoIdentityPool` Submodule <a name="`dataAwsccCognitoIdentityPool` Submodule" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCognitoIdentityPool <a name="DataAwsccCognitoIdentityPool" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cognito_identity_pool awscc_cognito_identity_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoIdentityPool(Construct Scope, string Id, DataAwsccCognitoIdentityPoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig">DataAwsccCognitoIdentityPoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig">DataAwsccCognitoIdentityPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCognitoIdentityPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCognitoIdentityPool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCognitoIdentityPool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCognitoIdentityPool.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCognitoIdentityPool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCognitoIdentityPool resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCognitoIdentityPool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCognitoIdentityPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cognito_identity_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCognitoIdentityPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.allowClassicFlow">AllowClassicFlow</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.allowUnauthenticatedIdentities">AllowUnauthenticatedIdentities</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.cognitoEvents">CognitoEvents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.cognitoIdentityProviders">CognitoIdentityProviders</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList">DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.cognitoStreams">CognitoStreams</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference">DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.developerProviderName">DeveloperProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.identityPoolId">IdentityPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.identityPoolName">IdentityPoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.identityPoolTags">IdentityPoolTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList">DataAwsccCognitoIdentityPoolIdentityPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.openIdConnectProviderArNs">OpenIdConnectProviderArNs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.pushSync">PushSync</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference">DataAwsccCognitoIdentityPoolPushSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.samlProviderArNs">SamlProviderArNs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.supportedLoginProviders">SupportedLoginProviders</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AllowClassicFlow`<sup>Required</sup> <a name="AllowClassicFlow" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.allowClassicFlow"></a>

```csharp
public IResolvable AllowClassicFlow { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AllowUnauthenticatedIdentities`<sup>Required</sup> <a name="AllowUnauthenticatedIdentities" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.allowUnauthenticatedIdentities"></a>

```csharp
public IResolvable AllowUnauthenticatedIdentities { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CognitoEvents`<sup>Required</sup> <a name="CognitoEvents" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.cognitoEvents"></a>

```csharp
public string CognitoEvents { get; }
```

- *Type:* string

---

##### `CognitoIdentityProviders`<sup>Required</sup> <a name="CognitoIdentityProviders" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.cognitoIdentityProviders"></a>

```csharp
public DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList CognitoIdentityProviders { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList">DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList</a>

---

##### `CognitoStreams`<sup>Required</sup> <a name="CognitoStreams" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.cognitoStreams"></a>

```csharp
public DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference CognitoStreams { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference">DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference</a>

---

##### `DeveloperProviderName`<sup>Required</sup> <a name="DeveloperProviderName" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.developerProviderName"></a>

```csharp
public string DeveloperProviderName { get; }
```

- *Type:* string

---

##### `IdentityPoolId`<sup>Required</sup> <a name="IdentityPoolId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.identityPoolId"></a>

```csharp
public string IdentityPoolId { get; }
```

- *Type:* string

---

##### `IdentityPoolName`<sup>Required</sup> <a name="IdentityPoolName" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.identityPoolName"></a>

```csharp
public string IdentityPoolName { get; }
```

- *Type:* string

---

##### `IdentityPoolTags`<sup>Required</sup> <a name="IdentityPoolTags" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.identityPoolTags"></a>

```csharp
public DataAwsccCognitoIdentityPoolIdentityPoolTagsList IdentityPoolTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList">DataAwsccCognitoIdentityPoolIdentityPoolTagsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OpenIdConnectProviderArNs`<sup>Required</sup> <a name="OpenIdConnectProviderArNs" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.openIdConnectProviderArNs"></a>

```csharp
public string[] OpenIdConnectProviderArNs { get; }
```

- *Type:* string[]

---

##### `PushSync`<sup>Required</sup> <a name="PushSync" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.pushSync"></a>

```csharp
public DataAwsccCognitoIdentityPoolPushSyncOutputReference PushSync { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference">DataAwsccCognitoIdentityPoolPushSyncOutputReference</a>

---

##### `SamlProviderArNs`<sup>Required</sup> <a name="SamlProviderArNs" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.samlProviderArNs"></a>

```csharp
public string[] SamlProviderArNs { get; }
```

- *Type:* string[]

---

##### `SupportedLoginProviders`<sup>Required</sup> <a name="SupportedLoginProviders" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.supportedLoginProviders"></a>

```csharp
public string SupportedLoginProviders { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCognitoIdentityPoolCognitoIdentityProviders <a name="DataAwsccCognitoIdentityPoolCognitoIdentityProviders" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProviders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProviders.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoIdentityPoolCognitoIdentityProviders {

};
```


### DataAwsccCognitoIdentityPoolCognitoStreams <a name="DataAwsccCognitoIdentityPoolCognitoStreams" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoIdentityPoolCognitoStreams {

};
```


### DataAwsccCognitoIdentityPoolConfig <a name="DataAwsccCognitoIdentityPoolConfig" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoIdentityPoolConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cognito_identity_pool#id DataAwsccCognitoIdentityPool#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCognitoIdentityPoolIdentityPoolTags <a name="DataAwsccCognitoIdentityPoolIdentityPoolTags" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoIdentityPoolIdentityPoolTags {

};
```


### DataAwsccCognitoIdentityPoolPushSync <a name="DataAwsccCognitoIdentityPoolPushSync" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSync.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoIdentityPoolPushSync {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList <a name="DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.get"></a>

```csharp
private DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference <a name="DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck">ServerSideTokenCheck</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProviders">DataAwsccCognitoIdentityPoolCognitoIdentityProviders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.providerName"></a>

```csharp
public string ProviderName { get; }
```

- *Type:* string

---

##### `ServerSideTokenCheck`<sup>Required</sup> <a name="ServerSideTokenCheck" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.serverSideTokenCheck"></a>

```csharp
public IResolvable ServerSideTokenCheck { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProvidersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCognitoIdentityPoolCognitoIdentityProviders InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoIdentityProviders">DataAwsccCognitoIdentityPoolCognitoIdentityProviders</a>

---


### DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference <a name="DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.streamingStatus">StreamingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.streamName">StreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreams">DataAwsccCognitoIdentityPoolCognitoStreams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `StreamingStatus`<sup>Required</sup> <a name="StreamingStatus" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.streamingStatus"></a>

```csharp
public string StreamingStatus { get; }
```

- *Type:* string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.streamName"></a>

```csharp
public string StreamName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreamsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCognitoIdentityPoolCognitoStreams InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolCognitoStreams">DataAwsccCognitoIdentityPoolCognitoStreams</a>

---


### DataAwsccCognitoIdentityPoolIdentityPoolTagsList <a name="DataAwsccCognitoIdentityPoolIdentityPoolTagsList" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoIdentityPoolIdentityPoolTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.get"></a>

```csharp
private DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference <a name="DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTags">DataAwsccCognitoIdentityPoolIdentityPoolTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCognitoIdentityPoolIdentityPoolTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolIdentityPoolTags">DataAwsccCognitoIdentityPoolIdentityPoolTags</a>

---


### DataAwsccCognitoIdentityPoolPushSyncOutputReference <a name="DataAwsccCognitoIdentityPoolPushSyncOutputReference" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCognitoIdentityPoolPushSyncOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.property.applicationArns">ApplicationArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSync">DataAwsccCognitoIdentityPoolPushSync</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationArns`<sup>Required</sup> <a name="ApplicationArns" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.property.applicationArns"></a>

```csharp
public string[] ApplicationArns { get; }
```

- *Type:* string[]

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSyncOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCognitoIdentityPoolPushSync InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCognitoIdentityPool.DataAwsccCognitoIdentityPoolPushSync">DataAwsccCognitoIdentityPoolPushSync</a>

---



