# `dataAwsccEksIdentityProviderConfig` Submodule <a name="`dataAwsccEksIdentityProviderConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEksIdentityProviderConfig <a name="DataAwsccEksIdentityProviderConfig" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/eks_identity_provider_config awscc_eks_identity_provider_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.Initializer"></a>

```typescript
import { dataAwsccEksIdentityProviderConfig } from '@cdktn/provider-awscc'

new dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig(scope: Construct, id: string, config: DataAwsccEksIdentityProviderConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig">DataAwsccEksIdentityProviderConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig">DataAwsccEksIdentityProviderConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEksIdentityProviderConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.isConstruct"></a>

```typescript
import { dataAwsccEksIdentityProviderConfig } from '@cdktn/provider-awscc'

dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.isTerraformElement"></a>

```typescript
import { dataAwsccEksIdentityProviderConfig } from '@cdktn/provider-awscc'

dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.isTerraformDataSource"></a>

```typescript
import { dataAwsccEksIdentityProviderConfig } from '@cdktn/provider-awscc'

dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.generateConfigForImport"></a>

```typescript
import { dataAwsccEksIdentityProviderConfig } from '@cdktn/provider-awscc'

dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEksIdentityProviderConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEksIdentityProviderConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEksIdentityProviderConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/eks_identity_provider_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEksIdentityProviderConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.identityProviderConfigArn">identityProviderConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.identityProviderConfigName">identityProviderConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.oidc">oidc</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference">DataAwsccEksIdentityProviderConfigOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList">DataAwsccEksIdentityProviderConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `identityProviderConfigArn`<sup>Required</sup> <a name="identityProviderConfigArn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.identityProviderConfigArn"></a>

```typescript
public readonly identityProviderConfigArn: string;
```

- *Type:* string

---

##### `identityProviderConfigName`<sup>Required</sup> <a name="identityProviderConfigName" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.identityProviderConfigName"></a>

```typescript
public readonly identityProviderConfigName: string;
```

- *Type:* string

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.oidc"></a>

```typescript
public readonly oidc: DataAwsccEksIdentityProviderConfigOidcOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference">DataAwsccEksIdentityProviderConfigOidcOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.tags"></a>

```typescript
public readonly tags: DataAwsccEksIdentityProviderConfigTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList">DataAwsccEksIdentityProviderConfigTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEksIdentityProviderConfigConfig <a name="DataAwsccEksIdentityProviderConfigConfig" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.Initializer"></a>

```typescript
import { dataAwsccEksIdentityProviderConfig } from '@cdktn/provider-awscc'

const dataAwsccEksIdentityProviderConfigConfig: dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/eks_identity_provider_config#id DataAwsccEksIdentityProviderConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEksIdentityProviderConfigOidc <a name="DataAwsccEksIdentityProviderConfigOidc" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidc.Initializer"></a>

```typescript
import { dataAwsccEksIdentityProviderConfig } from '@cdktn/provider-awscc'

const dataAwsccEksIdentityProviderConfigOidc: dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidc = { ... }
```


### DataAwsccEksIdentityProviderConfigOidcRequiredClaims <a name="DataAwsccEksIdentityProviderConfigOidcRequiredClaims" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaims.Initializer"></a>

```typescript
import { dataAwsccEksIdentityProviderConfig } from '@cdktn/provider-awscc'

const dataAwsccEksIdentityProviderConfigOidcRequiredClaims: dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaims = { ... }
```


### DataAwsccEksIdentityProviderConfigTags <a name="DataAwsccEksIdentityProviderConfigTags" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTags.Initializer"></a>

```typescript
import { dataAwsccEksIdentityProviderConfig } from '@cdktn/provider-awscc'

const dataAwsccEksIdentityProviderConfigTags: dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEksIdentityProviderConfigOidcOutputReference <a name="DataAwsccEksIdentityProviderConfigOidcOutputReference" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.Initializer"></a>

```typescript
import { dataAwsccEksIdentityProviderConfig } from '@cdktn/provider-awscc'

new dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.groupsClaim">groupsClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.groupsPrefix">groupsPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.issuerUrl">issuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.requiredClaims">requiredClaims</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList">DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.usernameClaim">usernameClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.usernamePrefix">usernamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidc">DataAwsccEksIdentityProviderConfigOidc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `groupsClaim`<sup>Required</sup> <a name="groupsClaim" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.groupsClaim"></a>

```typescript
public readonly groupsClaim: string;
```

- *Type:* string

---

##### `groupsPrefix`<sup>Required</sup> <a name="groupsPrefix" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.groupsPrefix"></a>

```typescript
public readonly groupsPrefix: string;
```

- *Type:* string

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.issuerUrl"></a>

```typescript
public readonly issuerUrl: string;
```

- *Type:* string

---

##### `requiredClaims`<sup>Required</sup> <a name="requiredClaims" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.requiredClaims"></a>

```typescript
public readonly requiredClaims: DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList">DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList</a>

---

##### `usernameClaim`<sup>Required</sup> <a name="usernameClaim" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.usernameClaim"></a>

```typescript
public readonly usernameClaim: string;
```

- *Type:* string

---

##### `usernamePrefix`<sup>Required</sup> <a name="usernamePrefix" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.usernamePrefix"></a>

```typescript
public readonly usernamePrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEksIdentityProviderConfigOidc;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidc">DataAwsccEksIdentityProviderConfigOidc</a>

---


### DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList <a name="DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.Initializer"></a>

```typescript
import { dataAwsccEksIdentityProviderConfig } from '@cdktn/provider-awscc'

new dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.get"></a>

```typescript
public get(index: number): DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference <a name="DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEksIdentityProviderConfig } from '@cdktn/provider-awscc'

new dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaims">DataAwsccEksIdentityProviderConfigOidcRequiredClaims</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaimsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEksIdentityProviderConfigOidcRequiredClaims;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigOidcRequiredClaims">DataAwsccEksIdentityProviderConfigOidcRequiredClaims</a>

---


### DataAwsccEksIdentityProviderConfigTagsList <a name="DataAwsccEksIdentityProviderConfigTagsList" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.Initializer"></a>

```typescript
import { dataAwsccEksIdentityProviderConfig } from '@cdktn/provider-awscc'

new dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEksIdentityProviderConfigTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEksIdentityProviderConfigTagsOutputReference <a name="DataAwsccEksIdentityProviderConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEksIdentityProviderConfig } from '@cdktn/provider-awscc'

new dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTags">DataAwsccEksIdentityProviderConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEksIdentityProviderConfigTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEksIdentityProviderConfig.DataAwsccEksIdentityProviderConfigTags">DataAwsccEksIdentityProviderConfigTags</a>

---



